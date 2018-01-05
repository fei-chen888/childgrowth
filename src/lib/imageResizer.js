import EXIF from './exif.js';

function imageResizer(){
	
}
imageResizer.prototype.resize = function(imgObj,square,quality,callback){
	var image = new Image();
	image.src = imgObj.getAttribute('src');
	image.onload = function(){
		var imageWidth = this.width;
		var imageHeight = this.height;
		var rotate = 0;
		var positionX = 0;
		var positionY = 0;
		var clipWidth = square;
		var clipHeight = square;
		var imageScale = 1;
		if(this.width >= square || this.height >= square)
		{
			if (this.width > this.height) {
			    imageScale = square / imageWidth;
				imageWidth = square;
				imageHeight = imageHeight * imageScale;
			} else {
			    imageScale = square / imageHeight;
				imageHeight = square;
				imageWidth = imageWidth * imageScale; 
			}
		}
		var canvas = document.createElement("canvas");
    	var ctx = canvas.getContext('2d');
		var imgOrientation = 0;
        var ctx = canvas.getContext('2d'); 
        EXIF.getData(imgObj, function(){
	  		if(EXIF.getTag(this, 'Orientation')){
	  			imgOrientation = EXIF.getTag(this, 'Orientation');
	  		}
		});
		switch (imgOrientation) { 
		    case 6:  
		    	rotate = 90;
				positionY = -imageHeight;
				clipWidth = imageHeight;
				clipHeight = imageWidth;
		        break;
		    case 3: 
		    	rotate = 180;
		       	clipWidth = imageWidth;
				clipHeight = imageHeight;
		       	positionX = -imageWidth;
		        positionY = -imageHeight;
		        break;
		    case 8:  
		    	rotate = 270;
		    	positionX = -imageWidth;
				clipWidth = imageHeight;
				clipHeight = imageWidth;
		        break;  
		    default:  
		    	rotate = 0;
		        clipWidth = imageWidth;
				clipHeight = imageHeight;
		       	positionX = 0;
		        positionY = 0; 
		        break;  
		}
		canvas.width = Math.max(imageWidth,imageHeight);  
        canvas.height = Math.max(imageWidth,imageHeight); 
        ctx.rotate(rotate * Math.PI / 180);
        ctx.drawImage(this,positionX, positionY,imageWidth,imageHeight);
		var clipCanvas = document.createElement("canvas");
		clipCanvas.width = clipWidth;
		clipCanvas.height = clipHeight;
		clipCanvas.getContext("2d").drawImage(canvas,0,0);
		var imageData = {'base64':clipCanvas.toDataURL('image/png',quality)};
		clipCanvas = null;
		canvas = null;
		callback && callback(imageData);
	};
}
export default new imageResizer();
