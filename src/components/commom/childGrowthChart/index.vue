<template>

	<div class="page-header-main">
		<div class="pd-10 bg-white">
			<mt-navbar v-model="type">
				<mt-tab-item id="height">身高</mt-tab-item>
				<mt-tab-item id="weight">体重</mt-tab-item>
			</mt-navbar>
		</div>
			<div v-if="type=='height'">
				<div class="pd-10 text-center" v-if="heightList.length==0">
					<h1 class="fontsize-normal">无身高记录</h1>
					<p class="fontsize-small">点击右上角"<span class="el-icon-circle-plus-outline"></span>",输入宝宝的第一条生长记录</p>
				</div>
			</div>
			<div v-if="type=='weight'">
				<div class="pd-10 text-center" v-if="weightList.length==0">
					<h1 class="fontsize-normal">无体重记录</h1>
					<p class="fontsize-small">点击右上角"添加",输入宝宝的第一条生长记录</p>
				</div>
			</div>

	
		<div id="echart" v-bind:style="{width: echartWidth,height: echartHeight+'px' }"></div>
	
		<div class="pd-10 text-justify fontsize-small">
			<p>注:以上数据来自世界卫生组织WHO的儿童成长标准。</p>
		</div>
	
	<div v-if="type=='height'">
	<table cellpadding="0" cellspacing="0" class="table table-striped">
		<tr class="text-center">
			<th width="25%">宝宝年龄</th>
			<th width="25%">身高(cm)</th>
			<th width="25%">增长</th>
			<th width="25%">操作</th>
		</tr>
		<tr class="text-center" v-for="(item,index) in categoryData">
	    	<td>
	    		{{item}}<br/>
	    		<span class="color-desc fontsize-small">{{getAgeDate(index)}}</span>
	    	</td>
	    	<td>{{height(index)}}</td>
	    	<td>{{growHeight(index)}}</td>
	    	<td class="text-center">
	    		<mt-button v-on:click="editRecord(index)" type="default" size="small">
	    			<span v-if="height(index)!='-'">修改</span>
	    			<span v-if="height(index)=='-'">录入</span>
	    		</mt-button><br/>
	    		<mt-button v-on:click="deleteRecord(index)" type="danger" size="small" class="mrt-10" v-if="height(index)>0">删除</mt-button>
	    	</td>
	    </tr>
	</table>
	</div>
	
	<div v-if="type=='weight'">
	<table cellpadding="0" cellspacing="0" class="table table-striped">
		<tr class="text-center">
			<th width="25%">宝宝年龄</th>
			<th width="25%">体高(kg)</th>
			<th width="25%">增加</th>
			<th width="25%">操作</th>
		</tr>
		<tr class="text-center" v-for="(item,index) in categoryData">
	    	<td>
	    		{{item}}<br/>
	    		<span class="color-desc fontsize-small">{{getAgeDate(index)}}</span>
	    	</td>
	    	<td>{{weight(index)}}</td>
	    	<td>{{growWeight(index)}}</td>
	    	<td class="text-center">
	    		<mt-button v-on:click="editRecord(index)" type="default" size="small">
	    			<span v-if="weight(index)!='-'">修改</span>
	    			<span v-if="weight(index)=='-'">录入</span>
	    		</mt-button><br/>
	    		<mt-button v-on:click="deleteRecord(index)" type="danger" size="small" class="mrt-10" v-if="weight(index)>0">删除</mt-button>
	    	</td>
	    </tr>
	</table>
	</div>

<mt-popup ref="formPopup" class="baby-record-popup"  popup-transition="popup-fade" v-model="popupShow" closeOnClickModal="false">
<div class="baby-record-form">
	<div class="mint-cells-form">
		<div class="mint-cell">
			<label class="mint-cell-form-label">宝宝年龄:</label>
			<div class="mint-cell-primary">
				<input onfocus="this.blur()" type="text" class="minit-cell-form-input mrt-10" v-model="form.ageText" placeholder="请选择年龄" v-on:click="openPicker('age')" readonly/>
			</div>
		</div>
	</div>
	<div class="mint-cells-form">
		<div class="mint-cell">
			<label class="mint-cell-form-label">宝宝身高:</label>
			<div class="mint-cell-primary">
				<input onfocus="this.blur()" type="text" class="minit-cell-form-input mrt-10" v-model="form.height" placeholder="请输入身高" v-on:click="openPicker('height')" readonly/>
			</div>
		</div>
	</div>
	<div class="mint-cells-form">
		<div class="mint-cell">
			<label class="mint-cell-form-label">宝宝体重:</label>
			<div class="mint-cell-primary">
				<input onfocus="this.blur()" type="text" class="minit-cell-form-input mrt-10" v-model="form.weight" placeholder="请输入体重" v-on:click="openPicker('weight')" readonly/>
			</div>
		</div>
	</div>
	<div class="text-center mrt-50">
		<mt-button type="primary" v-on:click="saveData" style="width:100%">保存</mt-button>
	</div>
</div>
</mt-popup>

<mt-popup position="bottom" v-model="agePopupShow" closeOnClickModal="false">
<mt-picker ref="agePicker" :showToolbar="true" @change="onAgeChange" valueKey="key" :slots="slotsData.age" :visible-item-count="5">
<slot name="toolbar">
	<mt-button type="primary" v-on:click="closePicker('age')" size="small" class="toolbar-btn-confirm">确定</mt-button>
	<mt-button type="default" v-on:click="closePicker('age')" size="small" class="toolbar-btn-cancel">关闭</mt-button>
</slot>
</mt-picker>
</mt-popup>

<mt-popup position="bottom" v-model="heightPopupShow" closeOnClickModal="false">
<mt-picker ref="heightPicker" :showToolbar="true"  @change="onHeightChange" :slots="slotsData.height" :visible-item-count="5">
<slot name="toolbar">
	<mt-button type="primary" v-on:click="closePicker('height')" size="small" class="toolbar-btn-confirm">确定</mt-button>
	<mt-button type="default" v-on:click="closePicker('height')" size="small" class="toolbar-btn-cancel">关闭</mt-button>
</slot>
</mt-picker>
</mt-popup>

<mt-popup position="bottom" v-model="weightPopupShow" closeOnClickModal="false">
<mt-picker ref="weightPicker" :showToolbar="true" @change="onWeightChange" :slots="slotsData.weight" :visible-item-count="5">
<slot name="toolbar">
	<mt-button type="primary" v-on:click="closePicker('weight')" size="small" class="toolbar-btn-confirm">确定</mt-button>
	<mt-button type="default" v-on:click="closePicker('weight')" size="small" class="toolbar-btn-cancel">关闭</mt-button>
</slot>
</mt-picker>
</mt-popup>
</div>
</template>
<script>
import child_growthData from './childGrowthData.js'
let _myChart;
export default { 
	name: 'childGrowthChart',
	props: ['childData','id'],
	data(){
		return {
			form:{
				age:0,
				ageText:'',
				height:'',
				weight:'',
			},
			slotsData:{
				age:[
					{
						flex: 1,
				        values: [],
				        className: 'ageSlot',
				        defaultIndex:0
				    }
	          	],
	          	height:[
					{
						flex: 1,
				        values: [],
				        className: 'heightSlot1',
				        textAlign: 'right'
				    },{
			          divider: true,
			          content: '.',
			          className: 'heightSlot2'
			        },{
						flex:1,
				        values: [0,1,2,3,4,5,6,7,8,9],
				        className: 'heightSlot3',
				        textAlign: 'left'
				    }
	          	],
	          	weight:[
					{
						flex: 1,
				        values: [],
				        className: 'weightSlot1',
				        textAlign: 'right'
				    },{
			          divider: true,
			          content: '.',
			          className: 'weightSlot2'
			        },{
						flex:1,
				        values: [0,1,2,3,4,5,6,7,8,9],
				        className: 'weightSlot3',
				        textAlign: 'left'
				    }
	          	]
			},
			agePopupShow:false,
			heightPopupShow:false,
			weightPopupShow:false,
			popupShow:false,
			echartWidth:'100%',
			echartHeight:0,
			nickName:'',
			birthDate:'',
			sex:0,
			type:'height',
			categoryData:[],
			heightList:[],
			weightList:[],
			legendData:['1%','3%','15%','50%','85%','97%','99%'],
			colorData:['#a75877','#d6ae94','#629282','#666','#629282','#d6ae94','#a75877']
		}
	},
	created(){
		let _this = this;
		_this.nickName = _this.childData.nickName;
		_this.birthDate = _this.childData.birthDate;
		_this.sex = _this.childData.sex;
		_this.heightList = _this.childData.heightList;
		_this.weightList = _this.childData.weightList;
		_this.echartHeight = window.innerHeight*0.6;
		for(let i=30;i<=160;i++){
			_this.slotsData.height[0].values.push(i);
		}
		for(let i=2;i<=50;i++){
			_this.slotsData.weight[0].values.push(i);
		}
	},
	watch:{
		type(){
			_myChart.clear();
			this.echartDraw();
		}
	},
	mounted() {
		let _this = this;		
		require.ensure([],function(){
      		let _echarts = require('echarts');
      		_myChart = _echarts.init(document.querySelector('#echart'));
			_this.echartDraw();
      	},function(){
      		vue.$toast('load echarts error');
      	},'static/js/echarts');
	},
	methods:{
		openPicker(type){
			let _this = this;
			document.body.classList.add('scrollY-hiden');
			switch(type){
				case 'age':
					_this.agePopupShow = true;
					break;
				case 'height':
					_this.heightPopupShow = true;
					break;
				case 'weight':
					_this.weightPopupShow = true;
					break;
			}
		},
		closePicker(type){
			let _this = this;
			document.body.classList.remove('scrollY-hiden');
			switch(type){
				case 'age':
					_this.agePopupShow = false;
					break;
				case 'height':
					_this.heightPopupShow = false;
					break;
				case 'weight':
					_this.weightPopupShow = false;
					break;
			}
		},
		onHeightChange(picker, values){
			let _this = this;
			_this.form.height =values[0]+'.'+values[1];
		},
		onWeightChange(picker, values){
			let _this = this;
			_this.form.weight =values[0]+'.'+values[1];
		},
		onAgeChange(picker, values){
			let _this = this;
			if(values[0]){
				_this.form.age = values[0].value;
				_this.form.ageText = values[0].key;
			}
		},
		closeReocrdPopup(){
			let _this = this;
			_this.popupShow = false;
		},
		saveData(){
			let _this = this;
			let _listSize = _this.heightList.length;
			let _badyData = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
			if(_listSize<(_this.form.age+1)){
				for(let i = _listSize;i<_this.form.age;i++){
					_this.heightList.push(0);
				}
				_this.heightList.push(_this.form.height);
			}else{
				_this.heightList[_this.form.age] = _this.form.height;
			}
			
			_listSize = _this.weightList.length;
			if(_listSize<(_this.form.age+1)){
				for(let i = _listSize;i<_this.form.age;i++){
					_this.weightList.push(0);
				}
				_this.weightList.push(_this.form.weight);
			}else{
				_this.weightList[_this.form.age] = _this.form.weight;
			}
			
			_this.$refs.formPopup.close();
			
			_this.$toast({
				message: '保存成功',
				iconClass: 'mintui mint-toast-icon mintui-success',
				duration:3000
			});
			_badyData[_this.id].heightList = _this.$localData.deepCopy(_this.heightList);
			_badyData[_this.id].weightList = _this.$localData.deepCopy(_this.weightList);
			_this.$localData.setItem(_this.$config.localStorageKey.childData,_badyData);
			_this.echartDraw();
		},
		editRecord(index){
			let _this = this;
			_this.popupShow = true;
			if(index==-1){
				index = 0;
				if(_this.type=='height'){
					index = _this.heightList.length;
				}
				if(_this.type=='weight'){
					index = _this.weightList.length;
				}
			}
			_this.slotsData.age[0].defaultIndex = index;
			_this.slotsData.age[0].values = [];
			_this.categoryData.forEach(function(value,index){
				if(_this.form.age==index){
					_this.form.ageText = value+'('+_this.getAgeDate(index)+')';
				}
				_this.slotsData.age[0].values.push({
					key:value+'('+_this.getAgeDate(index)+')',
					value:index
				});
			});
			let _heightArray = [];
			let _weightArray = [];
			if(_this.heightList[index] && _this.heightList[index]>0){
				_heightArray = (_this.heightList[index]+'').split('.');
			}else{
				_heightArray = (child_growthData.height[_this.sex][index][3]+'').split('.');
			}
			if(_this.weightList[index] && _this.weightList[index]>0){
				_weightArray = (_this.weightList[index]+'').split('.');
			}else{
				_weightArray = (child_growthData.weight[_this.sex][index][3]+'').split('.');
			}
			_this.$refs.heightPicker.setSlotValue(0,parseInt(_heightArray[0]));
			if(_heightArray[1]){
				_this.$refs.heightPicker.setSlotValue(1,parseInt(_heightArray[1]));
			}
			
			_this.$refs.weightPicker.setSlotValue(0,parseInt(_weightArray[0]))
			if(_weightArray[1]){
				_this.$refs.weightPicker.setSlotValue(1,parseInt(_weightArray[1]));
			}
		},
		deleteRecord(index){
			let _this = this;
			_this.$messagebox.confirm('确定删除?').then(action => {
				let babyData = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
				if(babyData[_this.id]){
					if(_this.type=='height'){
						_this.$set(_this.heightList, index, 0);
						babyData[_this.id].heightList = _this.$localData.deepCopy(_this.heightList);
					}
					if(_this.type=='weight'){
						_this.$set(_this.weightList, index, 0);
						babyData[_this.id].weightList = _this.$localData.deepCopy(_this.weightList);
					}
					_this.$localData.setItem(_this.$config.localStorageKey.childData,babyData);
					_this.echartDraw();
				}
			},cancel=>{
			});
		},
		getAgeDate(index){
			let _this = this;
			let _timeSpan;
			_timeSpan = new Date().dateToValue(_this.birthDate+' 0:0:0');
			_timeSpan = _timeSpan + (1000*60*60*24*30*index);
			return new Date(_timeSpan).format('yyyy-MM-dd');
		},
		height(index){
			let _this = this;
			if(_this.heightList[index] && _this.heightList[index]>0){
				return _this.heightList[index];
			}else{
				return '-';
			}
		},
		growHeight(index){
			let _this = this;
			if(index==0){
				return '-';
			}
			if(_this.heightList[index] && _this.heightList[index]>0 && _this.heightList[index-1]){
				return (_this.heightList[index]-_this.heightList[index-1]).toFixed(2);
			}else{
				return '-';
			}
		},
		weight(index){
			let _this = this;
			if(_this.weightList[index] && _this.weightList[index]>0){
				return _this.weightList[index];
			}else{
				return '-';
			}
		},
		growWeight(index){
			let _this = this;
			if(index==0){
				return '-';
			}
			if(_this.weightList[index] && _this.weightList[index]>0 && _this.weightList[index-1]){
				return (_this.weightList[index]-_this.weightList[index-1]).toFixed(2);
			}else{
				return '-';
			}
		},
		echartDraw(){
			let _this = this;
			let _seriesData = [];
			let _growthData;
			let _yAxisMin = 1000;
			let _echartBackgroundColor = '#0695d7';
			let _echartTitle = '0～7岁{{sex}}{{type}}/年龄标准差数值表';
			let _childSeriesBorderColor = '#0695d7';
			let _child_seriesData = [];
			let _childSeriesName = '';
			if(_this.sex==1){
				_echartBackgroundColor = '#e57db2';
				_childSeriesBorderColor = '#e57db2';
				_echartTitle = _echartTitle.replace(/{{sex}}/,'女童');
			}else{
				_echartBackgroundColor = '#0695d7';
				_childSeriesBorderColor = '#0695d7';
				_echartTitle = _echartTitle.replace(/{{sex}}/,'男童');
			}
			switch(_this.type){
				case 'height':
					_echartTitle = _echartTitle.replace(/{{type}}/,'身高(cm)');
					_growthData = child_growthData.height[_this.sex];
					_child_seriesData = _this.$localData.deepCopy(_this.heightList);
					_childSeriesName = '身高'
					break;
				case 'weight':
					_echartTitle = _echartTitle.replace(/{{type}}/,'体重(kg)');
					_growthData = child_growthData.weight[_this.sex];
					_child_seriesData = _this.$localData.deepCopy(_this.weightList);
					_childSeriesName = '体重'
					break;
			}
			for(let i=0;i<_this.legendData.length;i++) {
				_seriesData.push({
		        	name:_this.legendData[i],
		        	stack:_this.legendData[i],
		            type:'line',
		            symbol: 'emptyCircle',
		            symbolSize:0,
		            data:[],
		            itemStyle: {
		            	normal: {
		            		color: _this.colorData[i]
		            	}
		        	},
		        	lineStyle:{
		        		normal:{
		        			width:1,
		        			type:'dotted',
		        			opacity:0.8
		        		}
		        	}
				});
			};
			for(let key in _growthData){
				if(key==0){
					_this.categoryData.push('出生');
				}else{
					if(key%12==0){
						_this.categoryData.push(key/12+'岁');
					}else{
						if(parseInt(key/12)>0){
							_this.categoryData.push(parseInt(key/12)+'岁' + key%12 + '个月');
						}else{
							_this.categoryData.push(key%12 + '个月');
						}
					}
				}

				for(let i=_growthData[key].length-1;i>=0;i--){
					_yAxisMin = parseInt(Math.min(_yAxisMin,_growthData[key][i]));
					
					_seriesData[i].data.push(_growthData[key][i]);
				}
			}
			_yAxisMin = _yAxisMin - 5;
			_yAxisMin = Math.max(_yAxisMin,0);
			let new_child_seriesData = [];
			for(let i=_child_seriesData.length-1;i>=0;i--){
				if(_child_seriesData[i]>0 || new_child_seriesData.length>0){
					if(_child_seriesData[i]==0){
						new_child_seriesData.unshift(_seriesData[3].data[i]);
					}else{
						new_child_seriesData.unshift(_child_seriesData[i]);
					}
				}
			}
			_seriesData.push({
	        	name:_childSeriesName,
	            type:'line',
	            smooth: true,
	            symbol: 'circle',
	            symbolSize:4,
	            data:new_child_seriesData,
	            itemStyle: {
	            	normal: {
	            		color: _childSeriesBorderColor,
	            	}
	        	},
	        	lineStyle:{
	        		normal:{
	        			width:2
	        		}
	        	}
			});
			let _option = {
			backgroundColor:_echartBackgroundColor,
			title: [
		        {
		        	top:15,
		            text: _echartTitle,
		            left: 'center',
		            textStyle: {
		                color: '#fff',
		                fontStyle:'normal',
		                fontSize:14
		            }
		        },{
		        	bottom:5,
		        	text:'(左右拖动查看更多年龄)',
		        	left: 'center',
		            textStyle: {
		                color: '#ccc',
		                fontStyle:'normal',
		                fontSize:10
		            }
		        }
		    ],
			tooltip:{
				trigger: 'axis',
				padding:0,
				formatter: function (params) {
					let _valMinIndex = -1,//数值在曲线的区间（低点）
						_valMaxIndex = -1,//数值在曲线的区间（高点）
						_percentile = 0,//数值百分位
						_str = '<div class="echart-tooltip">';
		        	_str += '<p><span class="pdr-5">年龄</span>'+params[0].name+'</p>';
		        	for (let item of params) {
					  if(item.seriesName==_childSeriesName){
					  	//判断数值在线曲的区间位置
					  	for(let i=0;i<=6;i++){
					  		if(params[i].value > item.value && _valMinIndex==-1){
					  			_valMinIndex = 	i-1;
					  		}
					  		if(params[i].value > item.value && _valMaxIndex==-1){
					  			_valMaxIndex = 	i;
					  		}
					  	}
					  	//数值低于曲线的区间内
					  	if(_valMinIndex==0 && _valMaxIndex==0){
					  		_percentile = 0;
					  	}
					  	//数值高曲线的区间内
					  	if(_valMinIndex==-1 && _valMaxIndex==-1){
					  		_percentile = 99;
					  	}
					  	//数组在曲线的区间内
					  	if(_valMinIndex>0){
					  		let _minPercentile = parseInt(_this.legendData[_valMinIndex].replace(/\%/,'')),
					  			_maxPerCentile = parseInt(_this.legendData[_valMaxIndex].replace(/\%/,'')),
					  			_defPercentile = _maxPerCentile - _minPercentile,
					  			_minValue = params[_valMinIndex].value,
					  			_maxValue = params[_valMaxIndex].value,
					  			_defValue = _maxValue - _minValue;
					  		_percentile = _minPercentile + _defPercentile*(item.value-_minValue)/_defValue
					  		
					  	}
					  	_percentile = parseInt(_percentile)
					  	if(_percentile>99){
					  		_percentile = 99;
					  	}
					  	_str += '<p><span class="pdr-5">'+_childSeriesName+'</span>'+item.value+'</p>';
					  	if(_percentile<=5){
					  		_str += '<p>低于<span class="color-danger pdl-5 pdr-5">95%</span>的同龄儿童</p>'
					  	}else if(_percentile>=95){
					  		_str += '<p>超过<span class="color-danger pdl-5 pdr-5">'+_percentile+'%</span>的同龄儿童</p>'
					  	}else{
					  		_str += '<p>超过<span class="color-primary pdl-5 pdr-5">'+_percentile+'%</span>的同龄儿童</p>'
					  	}
					  }else{
					  	_str += '<p><span class="pdr-5">'+item.seriesName+'</span>'+item.value+'</p>'
					  }
					}
		        	_str += '</div>';
		        	return _str;
		    	}
		    },
		    grid: {
		    	top: 50,
		        left: 10,
		        right: 20,
		        bottom:30,
		        show:true,
		        containLabel: true,
		        backgroundColor:'#f2f2f2',
		        borderWidth:0
		    },
		    xAxis : {
		        type : 'category',
		        data : _this.categoryData,
		        boundaryGap: true,
		        axisLabel: {
		            textStyle: {
		                color: '#fff'
		            },
		            triggerEvent:true
		        },
		        axisLine: {
					lineStyle:{
						color: '#ccc'
					}
		        },
		        splitLine: {
		            lineStyle: {
		            	color: '#ccc',
		            	type:'dotted'
		            },
		            show:true
		        }
		    }
		    ,
			yAxis: {
		        min:_yAxisMin,
				type: 'value',
				axisLine: {
					lineStyle:{
						color: '#ccc'
					}
		        },
		        splitLine : {
		            lineStyle:{
						color: '#ccc',
						type:'dotted'
					}
		        },
		        axisLabel: {
		            textStyle: {
		                color: '#fff'
		            }
		        }
			},
			dataZoom: [
	           {  
	               type: 'inside',  
	               show: true,  
	               xAxisIndex: [0],  
	               startValue: 0,
	               endValue: 10,
	           },
			],
		    series : _seriesData
		};
		_myChart.showLoading({
		  text: '',
		  color: '#3cc776',
		  textColor: '#000',
		  maskColor: 'rgba(0, 0, 0, 0.2)',
		  zlevel: 0
		});
		//延迟渲染图表，让出资源
		setTimeout(function(){
			_myChart.hideLoading();
			_myChart.setOption(_option);
		},1000);
		}
	}
};
</script>