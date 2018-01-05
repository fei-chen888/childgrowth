class  localDataStores{
	deepCopy(data){
		switch(typeof data){
			case 'object':
				return JSON.parse(JSON.stringify(data));
				break;
			default:
				return data;
		}
	}
	getItemMap(key){
		if(localStorage.getItem(key)){
			try{
				return JSON.parse(localStorage.getItem(key));
			}catch(e){
				return {};
			}
		}
		return {};
	}
	getItemArray(key){
		if(localStorage.getItem(key)){
			try{
				return JSON.parse(localStorage.getItem(key));
			}catch(e){
				return [];
			}
		}
		return [];
	}
	setItem(key,d){
		if((typeof d)=='object'){
			d = JSON.stringify(d);	
		}
		localStorage.setItem(key,d);
	}
	getItemValue(key){
		return localStorage.getItem(key);
	}
}
export default localDataStores;