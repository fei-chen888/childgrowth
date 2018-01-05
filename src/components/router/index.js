import vue from 'vue'
import router from 'vue-router'
import mint from 'mint-ui';
import config from 'config'
import VeeValidate from 'vee-validate';
const veeconfig = {
  locale: 'zh_CN'
};
vue.use(VeeValidate,veeconfig);
vue.prototype.$config = config;
vue.prototype.$config = config;
vue.use(mint);
vue.use(router);
export default new router({
  routes: [
  	{
  		name:'home',
    	path: '/',
      component:(resolve) => {
      	require.ensure([],function(){
      		return resolve(require('../page/index.vue'));
      	},function(){
      		vue.$toast('../page/index.vue');
      	},'static/ensure/page/index');
    	}
    },
    {
    	name:'child-add',
    	path: '/child/add',
      component:(resolve) => {
      	require.ensure([],function(){
      		return resolve(require('../page/child/add.vue'));
      	},function(){
      		vue.$toast('../page/index.vue');
      	},'static/ensure/page/child');
    	},
    	meta: {
	      keepAlive: true // 不需要被缓存
	    }
    },
    {
    	name:'child-record',
    	path: '/child/record',
    	component:(resolve) => {
    		require.ensure([],function(){
      		return resolve(require('../page/child/record.vue'));
      	},function(){
      		vue.$toast('../page/index.vue');
      	},'static/ensure/page/child');
    	}
    }
  ]
});