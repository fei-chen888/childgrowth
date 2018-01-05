<template>
<div>
	<mt-header fixed :title="nickName+'的生长记录'">
	<router-link :to="{name:'home'}" slot="left">
	    <mt-button class="el-icon-arrow-left"></mt-button>
	</router-link>
	<mt-button class="el-icon-circle-plus-outline" slot="right" v-on:click="addRecord"></mt-button>
	</mt-header>
	<childGrowthChart :childData="childData" :id="id" ref="growthChart"></childGrowthChart>
</div>
</template>

<script>
	import childGrowthChart from '../../commom/childGrowthChart/index.vue'
	export default { 
		name: 'child-record',
		data(){
			return {
				nickName:'',
				childData:null,
				id:-1
			}
		},
		created(){
			let _this = this;
			let childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
			if(_this.$route.query.id==undefined && childList[_this.$route.query.id]){
				setTimeout(function(){
				_this.$router.push({
					name:'home' 
				});
				},200);
				return;
			}
			_this.id = this.$route.query.id;
			_this.childData = _this.$localData.deepCopy(childList[_this.id]);
			_this.nickName = _this.childData.nickName;
		},
		methods:{
			addRecord(){
				this.$refs.growthChart.editRecord(-1);
			}
		},
		components:{
			childGrowthChart:childGrowthChart
		}
	}
</script>