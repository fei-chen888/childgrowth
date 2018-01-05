<template>
<div>
	<mt-header fixed  title="我的宝宝">
		<mt-button slot="right" type="default" size="small" v-on:click="edit" v-if="childList.length > 0">{{editText}}</mt-button>
	</mt-header>
	<div class="page-header-main pdb-50">
		<div class="pd-10">
			<div class="text-center" v-if="childList.length == 0">
				<h1 class="fontsize-normal">未添加宝宝记录</h1>
				<p class="fontsize-small">点击下方"添加我的宝宝",输入宝宝的信息</p>
			</div>
			<div class="mint-cells" v-if="childList.length > 0">
			<div v-for="(item,index) in childList" class="mint-cell" v-on:click="childRecord(index)">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<div class="mint-cell-img headPic-normal">
							<div class="img-bg" :style="{backgroundImage:'url('+item.headPic+')'}"></div>
						</div>
						<div class="mint-cell-text">
							{{item.nickName}}
							<img v-if="item.sex == 0" src="../../images/boy.png">
							<img v-if="item.sex == 1" src="../../images/gril.png">
						</div>
						<div class="mint-cell-label">
							<span class="mrr-10">年龄:{{age(item.birthDate)}}</span>
							<span class="mrr-10" v-if="!editFlag">身高:{{height(index)}}</span>
							<span class="mrr-10" v-if="!editFlag">体重:{{weight(index)}}</span>
						</div>
					</div>
					<div class="mint-cell-value" v-if="editFlag">
						<mt-button v-on:click="editchild(index)" type="default" size="small" class="mrr-10">编辑</mt-button>
	    				<mt-button v-on:click="deletechild(index)" type="danger" size="small">删除</mt-button>
					</div>
					<i class="mint-cell-allow-right" v-if="!editFlag"></i>
				</div>
			</div>
			</div>
			<div class="text-center mrt-50">
			<mt-button class="mint-button--full" type="primary" v-on:click="addchild" size="normal">添加我的宝宝</mt-button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default { 
		name:'index',
		data(){
			return {
				editFlag:false,
				editText:'编辑',
				childList:[]
			}
		},
		created(){
			let _this = this;
			_this.childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
		},
		methods:{
			edit(){
				let _this = this;
				_this.editFlag = !_this.editFlag
				if(_this.editFlag){
					_this.editText = '完成';
				}else{
					_this.editText = '编辑';
				}
			},
			childRecord(index){
				let _this = this;
				if(_this.editFlag){
					return true;
				}
				_this.$router.push({
					name:'child-record',
					query:{id:index}
				});
			},
			deletechild(index){
				let _this = this;
				_this.$messagebox.confirm('确定删除?').then(action => {
					let _childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
					if(_childList[index]){
						_childList.splice(index,1);
					}
					_this.childList = _this.$localData.deepCopy(_childList);
					if(_this.childList.length==0){
						_this.editFlag = false;
					}
					_this.$localData.setItem(_this.$config.localStorageKey.childData,_childList);
				},cancel=>{
				});
			},
			editchild(index){
				let _this = this;
				_this.$router.push({
					name:'child-add',
					query:{id:index}
				});
			},
			addchild(){
				let _this = this;
				_this.$router.push({
					name:'child-add',
					id:-1
				});
			},
			age(birthDate){
				let _birthDateStr = birthDate + ' 0:0:0';
				let _nowDateStr = new Date().format('yyyy-MM-dd') + ' 0:0:0';
				let _difTimeSpan = new Date().datedif(_birthDateStr,_nowDateStr);
				return new Date().timespanToMonth(_difTimeSpan);
			},
			height(index){
				let _this = this;
				let _height = 0;
				_this.childList[index].heightList.forEach(function (value) {
					if(value>0){
						_height = value +'CM';
					}
				});
				if(_height==0){
					_height = '未测量';
				}
				return _height
			},
			weight(index){
				let _this = this;
				let _weight = 0;
				_this.childList[index].weightList.forEach(function (value) {
					if(value>0){
						_weight = value +'KG';
					}
				});
				if(_weight==0){
					_weight = '未测量';
				}
				return _weight
			}
		}
	}
</script>