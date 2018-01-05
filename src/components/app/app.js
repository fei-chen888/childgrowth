import vue from 'vue';
import router from '../router'
import dataExtend from 'common'
import localData from '../../lib/localDataStores.js';

vue.prototype.$localData = new localData();
vue.prototype.$extend = dataExtend;
var mainVue = new vue({
	el:'#app',
	router
});   
