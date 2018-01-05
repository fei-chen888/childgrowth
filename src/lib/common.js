import 'mint-ui/lib/style.css';
import '../css/minthack.css';
import '../css/style.css';
import 'element-theme-chalk/lib/icon.css';
Date.prototype.format = function(fmt)
{ 
    let o = {  
        "M+" : this.getMonth()+1,                 //月份  
        "d+" : this.getDate(),                    //日  
        "h+" : this.getHours(),                   //小时  
        "m+" : this.getMinutes(),                 //分  
        "s+" : this.getSeconds(),                 //秒  
        "q+" : Math.floor((this.getMonth()+3)/3), //季度  
        "S"  : this.getMilliseconds()             //毫秒  
    };  
    if(/(y+)/.test(fmt))  
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));  
    for(let k in o)  
        if(new RegExp("("+ k +")").test(fmt))  
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    return fmt;  
};
Date.prototype.dateToValue = function(str){
	let date = new Date(str.replace(/\-/g,'/'));
	return date.getTime();
};
Date.prototype.datedif = function(date1,date2){
	date1 = new Date(date1.replace(/\-/g,'/'));
	date2 = new Date(date2.replace(/\-/g,'/'));
	return (date2.getTime() - date1.getTime())/1000;
}
Date.prototype.timespanToMonth = function(timespan){
	let str = '';
	timespan = timespan/60/60/24;
	if(timespan<30){
		str = timespan+'天';
	}else{
		str = parseInt(timespan/30) +'个月';
		if(timespan%30>0){
			str += (timespan%30)+'天'
		}
	}
	if(timespan==0){
		str = '刚出生';
	}
	return str;
}

function dataExtend(){
}
dataExtend.prototype.deepCopy = function(d){
	return JSON.parse(JSON.stringify(d));
}
dataExtend.prototype.extend = function(){
	let _this = this;
	let returnObj = {};
	let length = arguments.length;
	
	for(let i=0;i<length;i++){
		for(let key in arguments[i]){
			if(returnObj[key]==undefined){
				returnObj[key] = arguments[i][key];
			}else{
				if(arguments[i][key] instanceof Array){
					returnObj[key] = _this.deepCopy(arguments[i][key]);
				}else if(arguments[i][key] instanceof Date || arguments[i][key] instanceof Function){
					returnObj[key] = arguments[i][key];
				}else if(arguments[i][key] instanceof Object){
					if(returnObj[key] instanceof Array){
						returnObj[key] = extend(arguments[i][key]);
					}else{
						returnObj[key] = extend(returnObj[key],arguments[i][key]);
					}
				}
			}
		}
	}
	return returnObj;
}
let d = new dataExtend();
export default d
