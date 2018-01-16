import vue from 'vue';
import router from '../router'
import dataExtend from 'common'
import localData from '../../lib/localDataStores.js';
//import imageClipper from '../imageClipper/index.js';
//vue.use(imageClipper);
vue.prototype.$localData = new localData();
vue.prototype.$extend = dataExtend;
var mainVue = new vue({
	el:'#app',
	router
});   
