webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_imageResizer_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_imageResizer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_imageResizer_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'child-add',
	data: function data() {
		return {
			id: -1,
			pickerValue: new Date().format('yyyy-MM-dd'),
			sexOptions: [{
				label: '男',
				value: '0'
			}, {
				label: '女',
				value: '1'
			}],
			nickName: '',
			birthDate: new Date().format('yyyy-MM-dd'),
			sex: '0',
			headPic: __webpack_require__(199)
		};
	},
	created: function created() {
		var _this = this;
		var _childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
		_this.id = _this.$route.query.id;
		if (!_childList[_this.id]) {
			_this.id = -1;
		} else {
			_this.nickName = _childList[_this.id].nickName;
			_this.birthDate = _childList[_this.id].birthDate;
			_this.headPic = _childList[_this.id].headPic;
			_this.sex = _childList[_this.id].sex;
		}
	},

	methods: {
		pickerImage: function pickerImage() {
			document.querySelector('#fileInput').click();
		},
		selectImage: function selectImage() {
			var _this = this;
			var _fileSelector = document.querySelector('#fileInput');
			var _file = _fileSelector.files[0];
			var _reader = new FileReader();
			_this.$indicator.open();
			_reader.readAsDataURL(_file);
			_reader.onload = function (e) {
				_this.headPic = e.target.result;
				setTimeout(function () {
					__WEBPACK_IMPORTED_MODULE_0__lib_imageResizer_js___default.a.resize(document.getElementById('headPic'), 100, 1, function (d) {
						_this.headPic = d.base64;
						_this.$indicator.close();
					});
				}, 200);
			};
		},
		handleDateCancel: function handleDateCancel() {
			document.body.classList.remove('scrollY-hiden');
		},
		handleDateConfirm: function handleDateConfirm(d) {
			document.body.classList.remove('scrollY-hiden');
			this.birthDate = d.format('yyyy-MM-dd');
			this.$refs.picker.close();
		},
		openPicker: function openPicker() {
			document.body.classList.add('scrollY-hiden');
			this.$refs.picker.open();
		},
		saveData: function saveData() {
			var _this2 = this;

			var _this = this;
			var _childList = [];
			_this.$validator.validateAll().then(function (result) {
				if (result) {
					_childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
					if (_this.id == -1) {
						_childList.push({
							headPic: _this.headPic,
							nickName: _this.nickName,
							sex: _this.sex,
							birthDate: _this.birthDate,
							weightList: [],
							heightList: []
						});
					} else {
						_childList[_this.id].headPic = _this.headPic;
						_childList[_this.id].nickName = _this.nickName;
						_childList[_this.id].sex = _this.sex;
						_childList[_this.id].birthDate = _this.birthDate;
					}
					_this.$localData.setItem(_this.$config.localStorageKey.childData, _childList);
					_this2.$router.push({
						name: 'home'
					});
				}
			});
		}
	}
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commom_childGrowthChart_index_vue__ = __webpack_require__(201);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'child-record',
	data: function data() {
		return {
			nickName: '',
			childData: null,
			id: -1
		};
	},
	created: function created() {
		var _this = this;
		var childList = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
		if (_this.$route.query.id == undefined && childList[_this.$route.query.id]) {
			setTimeout(function () {
				_this.$router.push({
					name: 'home'
				});
			}, 200);
			return;
		}
		_this.id = this.$route.query.id;
		_this.childData = _this.$localData.deepCopy(childList[_this.id]);
		_this.nickName = _this.childData.nickName;
	},

	methods: {
		addRecord: function addRecord() {
			this.$refs.growthChart.editRecord(-1);
		}
	},
	components: {
		childGrowthChart: __WEBPACK_IMPORTED_MODULE_0__commom_childGrowthChart_index_vue__["a" /* default */]
	}
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childGrowthData_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childGrowthData_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__childGrowthData_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var _myChart = void 0;
/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'childGrowthChart',
	props: ['childData', 'id'],
	data: function data() {
		return {
			form: {
				age: 0,
				ageText: '',
				height: '',
				weight: ''
			},
			slotsData: {
				age: [{
					flex: 1,
					values: [],
					className: 'ageSlot',
					defaultIndex: 0
				}],
				height: [{
					flex: 1,
					values: [],
					className: 'heightSlot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '.',
					className: 'heightSlot2'
				}, {
					flex: 1,
					values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					className: 'heightSlot3',
					textAlign: 'left'
				}],
				weight: [{
					flex: 1,
					values: [],
					className: 'weightSlot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '.',
					className: 'weightSlot2'
				}, {
					flex: 1,
					values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					className: 'weightSlot3',
					textAlign: 'left'
				}]
			},
			agePopupShow: false,
			heightPopupShow: false,
			weightPopupShow: false,
			popupShow: false,
			echartWidth: '100%',
			echartHeight: 0,
			nickName: '',
			birthDate: '',
			sex: 0,
			type: 'height',
			categoryData: [],
			heightList: [],
			weightList: [],
			legendData: ['1%', '3%', '15%', '50%', '85%', '97%', '99%'],
			colorData: ['#a75877', '#d6ae94', '#629282', '#666', '#629282', '#d6ae94', '#a75877']
		};
	},
	created: function created() {
		var _this = this;
		_this.nickName = _this.childData.nickName;
		_this.birthDate = _this.childData.birthDate;
		_this.sex = _this.childData.sex;
		_this.heightList = _this.childData.heightList;
		_this.weightList = _this.childData.weightList;
		_this.echartHeight = window.innerHeight * 0.6;
		for (var i = 30; i <= 160; i++) {
			_this.slotsData.height[0].values.push(i);
		}
		for (var _i = 2; _i <= 50; _i++) {
			_this.slotsData.weight[0].values.push(_i);
		}
	},

	watch: {
		type: function type() {
			_myChart.clear();
			this.echartDraw();
		}
	},
	mounted: function mounted() {
		var _this = this;
		__webpack_require__.e/* require.ensure */(3).then((function () {
			var _echarts = __webpack_require__(203);
			_myChart = _echarts.init(document.querySelector('#echart'));
			_this.echartDraw();
		}).bind(null, __webpack_require__)).catch(function () {
			vue.$toast('load echarts error');
		});
	},

	methods: {
		openPicker: function openPicker(type) {
			var _this = this;
			document.body.classList.add('scrollY-hiden');
			switch (type) {
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
		closePicker: function closePicker(type) {
			var _this = this;
			document.body.classList.remove('scrollY-hiden');
			switch (type) {
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
		onHeightChange: function onHeightChange(picker, values) {
			var _this = this;
			_this.form.height = values[0] + '.' + values[1];
		},
		onWeightChange: function onWeightChange(picker, values) {
			var _this = this;
			_this.form.weight = values[0] + '.' + values[1];
		},
		onAgeChange: function onAgeChange(picker, values) {
			var _this = this;
			if (values[0] && values[0].value) {
				_this.form.age = values[0].value;
				_this.form.ageText = values[0].key;
			}
		},
		closeReocrdPopup: function closeReocrdPopup() {
			var _this = this;
			_this.popupShow = false;
		},
		saveData: function saveData() {
			var _this = this;
			var _listSize = _this.heightList.length;
			var _badyData = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
			if (_listSize < _this.form.age + 1) {
				for (var i = _listSize; i < _this.form.age; i++) {
					_this.heightList.push(0);
				}
				_this.heightList.push(_this.form.height);
			} else {
				_this.heightList[_this.form.age] = _this.form.height;
			}

			_listSize = _this.weightList.length;
			if (_listSize < _this.form.age + 1) {
				for (var _i2 = _listSize; _i2 < _this.form.age; _i2++) {
					_this.weightList.push(0);
				}
				_this.weightList.push(_this.form.weight);
			} else {
				_this.weightList[_this.form.age] = _this.form.weight;
			}

			_this.$refs.formPopup.close();

			_this.$toast({
				message: '保存成功',
				iconClass: 'mintui mint-toast-icon mintui-success',
				duration: 3000
			});
			_badyData[_this.id].heightList = _this.$localData.deepCopy(_this.heightList);
			_badyData[_this.id].weightList = _this.$localData.deepCopy(_this.weightList);
			_this.$localData.setItem(_this.$config.localStorageKey.childData, _badyData);
			_this.echartDraw();
		},
		editRecord: function editRecord(index) {
			var _this = this;
			_this.popupShow = true;
			if (index == -1) {
				index = 0;
				if (_this.type == 'height') {
					index = _this.heightList.length;
				}
				if (_this.type == 'weight') {
					index = _this.weightList.length;
				}
			}
			_this.slotsData.age[0].defaultIndex = index;
			_this.slotsData.age[0].values = [];
			_this.categoryData.forEach(function (value, index) {
				if (_this.form.age == index) {
					_this.form.ageText = value + '(' + _this.getAgeDate(index) + ')';
				}
				_this.slotsData.age[0].values.push({
					key: value + '(' + _this.getAgeDate(index) + ')',
					value: index
				});
			});
			var _heightArray = [];
			var _weightArray = [];
			if (_this.heightList[index] && _this.heightList[index] > 0) {
				_heightArray = (_this.heightList[index] + '').split('.');
			} else {
				_heightArray = (__WEBPACK_IMPORTED_MODULE_0__childGrowthData_js___default.a.height[_this.sex][index][3] + '').split('.');
			}
			if (_this.weightList[index] && _this.weightList[index] > 0) {
				_weightArray = (_this.weightList[index] + '').split('.');
			} else {
				_weightArray = (__WEBPACK_IMPORTED_MODULE_0__childGrowthData_js___default.a.weight[_this.sex][index][3] + '').split('.');
			}
			_this.$refs.heightPicker.setSlotValue(0, parseInt(_heightArray[0]));
			if (_heightArray[1]) {
				_this.$refs.heightPicker.setSlotValue(1, parseInt(_heightArray[1]));
			}

			_this.$refs.weightPicker.setSlotValue(0, parseInt(_weightArray[0]));
			if (_weightArray[1]) {
				_this.$refs.weightPicker.setSlotValue(1, parseInt(_weightArray[1]));
			}
		},
		deleteRecord: function deleteRecord(index) {
			var _this = this;
			_this.$messagebox.confirm('确定删除?').then(function (action) {
				var babyData = _this.$localData.getItemArray(_this.$config.localStorageKey.childData);
				if (babyData[_this.id]) {
					if (_this.type == 'height') {
						_this.$set(_this.heightList, index, 0);
						babyData[_this.id].heightList = _this.$localData.deepCopy(_this.heightList);
					}
					if (_this.type == 'weight') {
						_this.$set(_this.weightList, index, 0);
						babyData[_this.id].weightList = _this.$localData.deepCopy(_this.weightList);
					}
					_this.$localData.setItem(_this.$config.localStorageKey.childData, babyData);
					_this.echartDraw();
				}
			}, function (cancel) {});
		},
		getAgeDate: function getAgeDate(index) {
			var _this = this;
			var _timeSpan = void 0;
			_timeSpan = new Date().dateToValue(_this.birthDate + ' 0:0:0');
			_timeSpan = _timeSpan + 1000 * 60 * 60 * 24 * 30 * index;
			return new Date(_timeSpan).format('yyyy-MM-dd');
		},
		height: function height(index) {
			var _this = this;
			if (_this.heightList[index] && _this.heightList[index] > 0) {
				return _this.heightList[index];
			} else {
				return '-';
			}
		},
		growHeight: function growHeight(index) {
			var _this = this;
			if (index == 0) {
				return '-';
			}
			if (_this.heightList[index] && _this.heightList[index] > 0 && _this.heightList[index - 1]) {
				return (_this.heightList[index] - _this.heightList[index - 1]).toFixed(2);
			} else {
				return '-';
			}
		},
		weight: function weight(index) {
			var _this = this;
			if (_this.weightList[index] && _this.weightList[index] > 0) {
				return _this.weightList[index];
			} else {
				return '-';
			}
		},
		growWeight: function growWeight(index) {
			var _this = this;
			if (index == 0) {
				return '-';
			}
			if (_this.weightList[index] && _this.weightList[index] > 0 && _this.weightList[index - 1]) {
				return (_this.weightList[index] - _this.weightList[index - 1]).toFixed(2);
			} else {
				return '-';
			}
		},
		echartDraw: function echartDraw() {
			var _this = this;
			var _seriesData = [];
			var _growthData = void 0;
			var _yAxisMin = 1000;
			var _echartBackgroundColor = '#0695d7';
			var _echartTitle = '0～7岁{{sex}}{{type}}/年龄标准差数值表';
			var _childSeriesBorderColor = '#0695d7';
			var _child_seriesData = [];
			var _childSeriesName = '';
			if (_this.sex == 1) {
				_echartBackgroundColor = '#e57db2';
				_childSeriesBorderColor = '#e57db2';
				_echartTitle = _echartTitle.replace(/{{sex}}/, '女童');
			} else {
				_echartBackgroundColor = '#0695d7';
				_childSeriesBorderColor = '#0695d7';
				_echartTitle = _echartTitle.replace(/{{sex}}/, '男童');
			}
			switch (_this.type) {
				case 'height':
					_echartTitle = _echartTitle.replace(/{{type}}/, '身高(cm)');
					_growthData = __WEBPACK_IMPORTED_MODULE_0__childGrowthData_js___default.a.height[_this.sex];
					_child_seriesData = _this.$localData.deepCopy(_this.heightList);
					_childSeriesName = '身高';
					break;
				case 'weight':
					_echartTitle = _echartTitle.replace(/{{type}}/, '体重(kg)');
					_growthData = __WEBPACK_IMPORTED_MODULE_0__childGrowthData_js___default.a.weight[_this.sex];
					_child_seriesData = _this.$localData.deepCopy(_this.weightList);
					_childSeriesName = '体重';
					break;
			}
			for (var i = 0; i < _this.legendData.length; i++) {
				_seriesData.push({
					name: _this.legendData[i],
					stack: _this.legendData[i],
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 0,
					data: [],
					itemStyle: {
						normal: {
							color: _this.colorData[i]
						}
					},
					lineStyle: {
						normal: {
							width: 1,
							type: 'dotted',
							opacity: 0.8
						}
					}
				});
			};
			for (var key in _growthData) {
				if (key == 0) {
					_this.categoryData.push('出生');
				} else {
					if (key % 12 == 0) {
						_this.categoryData.push(key / 12 + '岁');
					} else {
						if (parseInt(key / 12) > 0) {
							_this.categoryData.push(parseInt(key / 12) + '岁' + key % 12 + '个月');
						} else {
							_this.categoryData.push(key % 12 + '个月');
						}
					}
				}

				for (var _i3 = _growthData[key].length - 1; _i3 >= 0; _i3--) {
					_yAxisMin = parseInt(Math.min(_yAxisMin, _growthData[key][_i3]));

					_seriesData[_i3].data.push(_growthData[key][_i3]);
				}
			}
			_yAxisMin = _yAxisMin - 5;
			_yAxisMin = Math.max(_yAxisMin, 0);
			var new_child_seriesData = [];
			for (var _i4 = _child_seriesData.length - 1; _i4 >= 0; _i4--) {
				if (_child_seriesData[_i4] > 0 || new_child_seriesData.length > 0) {
					if (_child_seriesData[_i4] == 0) {
						new_child_seriesData.unshift(_seriesData[3].data[_i4]);
					} else {
						new_child_seriesData.unshift(_child_seriesData[_i4]);
					}
				}
			}
			_seriesData.push({
				name: _childSeriesName,
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				data: new_child_seriesData,
				itemStyle: {
					normal: {
						color: _childSeriesBorderColor
					}
				},
				lineStyle: {
					normal: {
						width: 2
					}
				}
			});
			var _option = {
				backgroundColor: _echartBackgroundColor,
				title: [{
					top: 15,
					text: _echartTitle,
					left: 'center',
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontSize: 14
					}
				}, {
					bottom: 5,
					text: '(左右拖动查看更多年龄)',
					left: 'center',
					textStyle: {
						color: '#ccc',
						fontStyle: 'normal',
						fontSize: 10
					}
				}],
				tooltip: {
					trigger: 'axis',
					padding: 0,
					formatter: function formatter(params) {
						var _valDif = (params[6].value - params[0].value) / 100;
						var _valMin = params[0].value;
						var _str = '<div class="echart-tooltip">';
						_str += '<p><span class="pdr-5">年龄</span>' + params[0].name + '</p>';
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
							for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var item = _step.value;

								if (item.seriesName == _childSeriesName) {
									var _percentile = parseInt((item.value - _valMin) / _valDif + 1);
									if (_percentile > 99) {
										_percentile = 99;
									}
									_str += '<p><span class="pdr-5">' + _childSeriesName + '</span>' + item.value + '</p>';

									if (_percentile <= 5) {
										_str += '<p>低于<span class="color-danger pdl-5 pdr-5">95%</span>的同龄儿童</p>';
									} else if (_percentile >= 95) {
										_str += '<p>超过<span class="color-danger pdl-5 pdr-5">' + _percentile + '%</span>的同龄儿童</p>';
									} else {
										_str += '<p>超过<span class="color-primary pdl-5 pdr-5">' + _percentile + '%</span>的同龄儿童</p>';
									}
								} else {
									_str += '<p><span class="pdr-5">' + item.seriesName + '</span>' + item.value + '</p>';
								}
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
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
					bottom: 30,
					show: true,
					containLabel: true,
					backgroundColor: '#f2f2f2',
					borderWidth: 0
				},
				xAxis: {
					type: 'category',
					data: _this.categoryData,
					boundaryGap: true,
					axisLabel: {
						textStyle: {
							color: '#fff'
						},
						triggerEvent: true
					},
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						},
						show: true
					}
				},

				yAxis: {
					min: _yAxisMin,
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}
					},
					axisLabel: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				dataZoom: [{
					type: 'inside',
					start: 0,
					end: 12
				}],
				series: _seriesData
			};
			_myChart.setOption(_option);
		}
	}
});

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _exif = __webpack_require__(198);

var _exif2 = _interopRequireDefault(_exif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageResizer() {}
imageResizer.prototype.resize = function (imgObj, square, quality, callback) {
	var image = new Image();
	image.src = imgObj.getAttribute('src');
	image.onload = function () {
		var imageWidth = this.width;
		var imageHeight = this.height;
		var rotate = 0;
		var positionX = 0;
		var positionY = 0;
		var clipWidth = square;
		var clipHeight = square;
		var imageScale = 1;
		if (this.width >= square || this.height >= square) {
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
		_exif2.default.getData(imgObj, function () {
			if (_exif2.default.getTag(this, 'Orientation')) {
				imgOrientation = _exif2.default.getTag(this, 'Orientation');
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
		canvas.width = Math.max(imageWidth, imageHeight);
		canvas.height = Math.max(imageWidth, imageHeight);
		ctx.rotate(rotate * Math.PI / 180);
		ctx.drawImage(this, positionX, positionY, imageWidth, imageHeight);
		var clipCanvas = document.createElement("canvas");
		clipCanvas.width = clipWidth;
		clipCanvas.height = clipHeight;
		clipCanvas.getContext("2d").drawImage(canvas, 0, 0);
		var imageData = { 'base64': clipCanvas.toDataURL('image/png', quality) };
		clipCanvas = null;
		canvas = null;
		callback && callback(imageData);
	};
};
exports.default = new imageResizer();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    var debug = false;

    var root = this;

    var EXIF = function EXIF(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {
        root.EXIF = EXIF;
    }

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000: "ExifVersion", // EXIF version
        0xA000: "FlashpixVersion", // Flashpix format version

        // colorspace tags
        0xA001: "ColorSpace", // Color space information tag

        // image configuration
        0xA002: "PixelXDimension", // Valid width of meaningful image
        0xA003: "PixelYDimension", // Valid height of meaningful image
        0x9101: "ComponentsConfiguration", // Information about channels
        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

        // user information
        0x927C: "MakerNote", // Any desired information written by the manufacturer
        0x9286: "UserComment", // Comments by user

        // related file
        0xA004: "RelatedSoundFile", // Name of related sound file

        // date and time
        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
        0x9290: "SubsecTime", // Fractions of seconds for DateTime
        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A: "ExposureTime", // Exposure time (in seconds)
        0x829D: "FNumber", // F number
        0x8822: "ExposureProgram", // Exposure program
        0x8824: "SpectralSensitivity", // Spectral sensitivity
        0x8827: "ISOSpeedRatings", // ISO speed rating
        0x8828: "OECF", // Optoelectric conversion factor
        0x9201: "ShutterSpeedValue", // Shutter speed
        0x9202: "ApertureValue", // Lens aperture
        0x9203: "BrightnessValue", // Value of brightness
        0x9204: "ExposureBias", // Exposure bias
        0x9205: "MaxApertureValue", // Smallest F number of lens
        0x9206: "SubjectDistance", // Distance to subject in meters
        0x9207: "MeteringMode", // Metering mode
        0x9208: "LightSource", // Kind of light source
        0x9209: "Flash", // Flash status
        0x9214: "SubjectArea", // Location and area of main subject
        0x920A: "FocalLength", // Focal length of the lens in mm
        0xA20B: "FlashEnergy", // Strobe energy in BCPS
        0xA20C: "SpatialFrequencyResponse", //
        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214: "SubjectLocation", // Location of subject in image
        0xA215: "ExposureIndex", // Exposure index selected on camera
        0xA217: "SensingMethod", // Image sensor type
        0xA300: "FileSource", // Image source (3 == DSC)
        0xA301: "SceneType", // Scene type (1 == directly photographed)
        0xA302: "CFAPattern", // Color filter array geometric pattern
        0xA401: "CustomRendered", // Special processing
        0xA402: "ExposureMode", // Exposure mode
        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
        0xA404: "DigitalZoomRation", // Digital zoom ratio
        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406: "SceneCaptureType", // Type of scene
        0xA407: "GainControl", // Degree of overall image gain adjustment
        0xA408: "Contrast", // Direction of contrast processing applied by camera
        0xA409: "Saturation", // Direction of saturation processing applied by camera
        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
        0xA40B: "DeviceSettingDescription", //
        0xA40C: "SubjectDistanceRange", // Distance to subject

        // other tags
        0xA005: "InteroperabilityIFDPointer",
        0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x8769: "ExifIFDPointer",
        0x8825: "GPSInfoIFDPointer",
        0xA005: "InteroperabilityIFDPointer",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x011C: "PlanarConfiguration",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x0128: "ResolutionUnit",
        0x0111: "StripOffsets",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x0201: "JPEGInterchangeFormat",
        0x0202: "JPEGInterchangeFormatLength",
        0x012D: "TransferFunction",
        0x013E: "WhitePoint",
        0x013F: "PrimaryChromaticities",
        0x0211: "YCbCrCoefficients",
        0x0214: "ReferenceBlackWhite",
        0x0132: "DateTime",
        0x010E: "ImageDescription",
        0x010F: "Make",
        0x0110: "Model",
        0x0131: "Software",
        0x013B: "Artist",
        0x8298: "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000: "GPSVersionID",
        0x0001: "GPSLatitudeRef",
        0x0002: "GPSLatitude",
        0x0003: "GPSLongitudeRef",
        0x0004: "GPSLongitude",
        0x0005: "GPSAltitudeRef",
        0x0006: "GPSAltitude",
        0x0007: "GPSTimeStamp",
        0x0008: "GPSSatellites",
        0x0009: "GPSStatus",
        0x000A: "GPSMeasureMode",
        0x000B: "GPSDOP",
        0x000C: "GPSSpeedRef",
        0x000D: "GPSSpeed",
        0x000E: "GPSTrackRef",
        0x000F: "GPSTrack",
        0x0010: "GPSImgDirectionRef",
        0x0011: "GPSImgDirection",
        0x0012: "GPSMapDatum",
        0x0013: "GPSDestLatitudeRef",
        0x0014: "GPSDestLatitude",
        0x0015: "GPSDestLongitudeRef",
        0x0016: "GPSDestLongitude",
        0x0017: "GPSDestBearingRef",
        0x0018: "GPSDestBearing",
        0x0019: "GPSDestDistanceRef",
        0x001A: "GPSDestDistance",
        0x001B: "GPSProcessingMethod",
        0x001C: "GPSAreaInformation",
        0x001D: "GPSDateStamp",
        0x001E: "GPSDifferential"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0x0000: "Flash did not fire",
            0x0001: "Flash fired",
            0x0005: "Strobe return light not detected",
            0x0007: "Strobe return light detected",
            0x0009: "Flash fired, compulsory flash mode",
            0x000D: "Flash fired, compulsory flash mode, return light not detected",
            0x000F: "Flash fired, compulsory flash mode, return light detected",
            0x0010: "Flash did not fire, compulsory flash mode",
            0x0018: "Flash did not fire, auto mode",
            0x0019: "Flash fired, auto mode",
            0x001D: "Flash fired, auto mode, return light not detected",
            0x001F: "Flash fired, auto mode, return light detected",
            0x0020: "No flash function",
            0x0041: "Flash fired, red-eye reduction mode",
            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
            0x0047: "Flash fired, red-eye reduction mode, return light detected",
            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059: "Flash fired, auto mode, red-eye reduction mode",
            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },

        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!img.exifdata;
    }

    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function (e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            var iptcdata = findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) {
                // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            } else if (/^blob\:/i.test(img.src)) {
                // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function () {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);
            } else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;

        var isFieldSegmentStart = function isFieldSegmentStart(dataView, offset) {
            return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4D && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
        };

        while (offset < length) {

            if (isFieldSegmentStart(dataView, offset)) {

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;
            }

            // Not the marker, continue searching
            offset++;
        }
    }
    var IptcFieldMap = {
        0x78: 'caption',
        0x6E: 'credit',
        0x19: 'keywords',
        0x37: 'dateCreated',
        0x50: 'byline',
        0x55: 'bylineTitle',
        0x7A: 'captionWriter',
        0x69: 'headline',
        0x74: 'copyright',
        0x0F: 'category'
    };
    function readIPTCData(file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        } else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    } else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    }

    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset,
            tag,
            i;

        for (i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }

    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd),
            numValues = file.getUint32(entryOffset + 4, !bigEnd),
            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
            offset,
            vals,
            val,
            n,
            numerator,
            denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2:
                // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : entryOffset + 8;
                return getStringFromDB(file, offset, numValues - 1);

            case 3:
                // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }

            case 4:
                // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 5:
                // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9:
                // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 10:
                // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags,
            tag,
            exifData,
            gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion":
                    case "FlashpixVersion":
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration":
                        exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID":
                        gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        return tags;
    }

    EXIF.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };

    EXIF.getTag = function (img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    };

    EXIF.getAllTags = function (img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };

    EXIF.pretty = function (img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (_typeof(data[a]) == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };

    EXIF.readFromBinaryFile = function (file) {
        return findEXIFinJPEG(file);
    };

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}).call(undefined);

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "mt-header",
        { attrs: { fixed: "", title: "宝宝信息" } },
        [
          _c(
            "router-link",
            { attrs: { slot: "left", to: { name: "home" } }, slot: "left" },
            [_c("mt-button", { staticClass: "el-icon-arrow-left" })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "page-header-main pdb-50" }, [
        _c(
          "div",
          {
            staticClass: "text-center pdt-10",
            on: {
              click: function($event) {
                _vm.pickerImage()
              }
            }
          },
          [
            _c("div", { staticClass: "headPic-big" }, [
              _c("div", {
                staticClass: "img-bg",
                style: { backgroundImage: "url(" + _vm.headPic + ")" }
              }),
              _vm._v(" "),
              _c("img", {
                staticStyle: { display: "none" },
                attrs: { src: _vm.headPic, id: "headPic" }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "color-desc fontsize-small" }, [
              _vm._v("请点击上传宝宝头像")
            ]),
            _vm._v(" "),
            _c("input", {
              staticStyle: { display: "none" },
              attrs: { id: "fileInput", type: "file", accept: "image/*" },
              on: {
                change: function($event) {
                  _vm.selectImage()
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mint-cells-form mrt-20" }, [
          _c("div", { staticClass: "mint-cell" }, [
            _c("label", { staticClass: "mint-cell-form-label" }, [
              _vm._v("昵称:")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mint-cell-primary" }, [
              _c("input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nickName,
                    expression: "nickName"
                  }
                ],
                class: {
                  "minit-cell-form-input mrt-10": true,
                  "is-error": _vm.errors.has("nickName")
                },
                attrs: {
                  type: "text",
                  name: "nickName",
                  placeholder: "请输入宝宝的昵称"
                },
                domProps: { value: _vm.nickName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nickName = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("nickName"),
                      expression: "errors.has('nickName')"
                    }
                  ],
                  staticClass: "validate-error"
                },
                [_vm._v("宝宝的昵称必须填写")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mint-cell" }, [
            _c("label", { staticClass: "mint-cell-form-label" }, [
              _vm._v("生日:")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mint-cell-primary" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.birthDate,
                    expression: "birthDate"
                  }
                ],
                staticClass: "minit-cell-form-input mrt-10",
                attrs: {
                  type: "text",
                  onfocus: "this.blur()",
                  placeholder: "请输入宝宝的生日",
                  readonly: ""
                },
                domProps: { value: _vm.birthDate },
                on: {
                  click: _vm.openPicker,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.birthDate = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mint-cell" }, [
            _c("label", { staticClass: "mint-cell-form-label" }, [
              _vm._v("性别:")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mint-cell-primary" },
              [
                _c("mt-radio", {
                  staticClass: "sex-radio",
                  attrs: { options: _vm.sexOptions },
                  model: {
                    value: _vm.sex,
                    callback: function($$v) {
                      _vm.sex = $$v
                    },
                    expression: "sex"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center mrt-50 mrl-10 mrr-10" },
          [
            _c(
              "mt-button",
              {
                staticClass: "mint-button--full",
                attrs: { type: "primary" },
                on: { click: _vm.saveData }
              },
              [_vm._v("保存")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("mt-datetime-picker", {
        ref: "picker",
        attrs: { type: "date" },
        on: { confirm: _vm.handleDateConfirm, cancel: _vm.handleDateCancel },
        model: {
          value: _vm.pickerValue,
          callback: function($$v) {
            _vm.pickerValue = $$v
          },
          expression: "pickerValue"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a7035278", esExports)
  }
}

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_5db0c77a_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(493);
var disposed = false
var normalizeComponent = __webpack_require__(67)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_5db0c77a_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\commom\\childGrowthChart\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db0c77a", Component.options)
  } else {
    hotAPI.reload("data-v-5db0c77a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//2006年WHO儿童生长发育评价标准
//身高:{0(男童):{月份:[-3SD,-2SD,-1SD,均值,1SD,2SD,3SD]}，1(女童):{月份:[-3SD,-2SD,-1SD,均值,1SD,2SD,3SD]}}
//体重:{0(男童):{月份:[-3SD,-2SD,-1SD,均值,1SD,2SD,3SD]}，1(女童):{月份:[-3SD,-2SD,-1SD,均值,1SD,2SD,3SD]}}
var _childGrowthData = {
	height: {
		0: {
			0: [44.2, 46.1, 48.0, 49.9, 51.8, 53.7, 55.6],
			1: [48.9, 50.8, 52.8, 54.7, 56.7, 58.6, 60.6],
			2: [52.4, 54.4, 56.4, 58.4, 60.4, 62.4, 64.4],
			3: [55.3, 57.3, 59.4, 61.4, 63.5, 65.5, 67.6],
			4: [57.6, 59.7, 61.8, 63.9, 66.0, 68.0, 70.1],
			5: [59.6, 61.7, 63.8, 65.9, 68.0, 70.1, 72.2],
			6: [61.2, 63.3, 65.5, 67.6, 69.8, 71.9, 74.0],
			7: [62.7, 64.8, 67.0, 69.2, 71.3, 73.5, 75.7],
			8: [64.0, 66.2, 68.4, 70.6, 72.8, 75.0, 77.2],
			9: [65.2, 67.5, 69.7, 72.0, 74.2, 76.5, 78.7],
			10: [66.4, 68.7, 71.0, 73.3, 75.6, 77.9, 80.1],
			11: [67.6, 69.9, 72.2, 74.5, 76.9, 79.2, 81.5],
			12: [68.6, 71.0, 73.4, 75.7, 78.1, 80.5, 82.9],
			13: [69.6, 72.1, 74.5, 76.9, 79.3, 81.8, 84.2],
			14: [70.6, 73.1, 75.6, 78.0, 80.5, 83.0, 85.5],
			15: [71.6, 74.1, 76.6, 79.1, 81.7, 84.2, 86.7],
			16: [72.5, 75.0, 77.6, 80.2, 82.8, 85.4, 88.0],
			17: [73.3, 76.0, 78.6, 81.2, 83.9, 86.5, 89.2],
			18: [74.2, 76.9, 79.6, 82.3, 85.0, 87.7, 90.4],
			19: [75.0, 77.7, 80.5, 83.2, 86.0, 88.8, 91.5],
			20: [75.8, 78.6, 81.4, 84.2, 87.0, 89.8, 92.6],
			21: [76.5, 79.4, 82.3, 85.1, 88.0, 90.9, 93.8],
			22: [77.2, 80.2, 83.1, 86.0, 89.0, 91.9, 94.9],
			23: [78.0, 81.0, 83.9, 86.9, 89.9, 92.9, 95.9],
			24: [78.0, 81.0, 84.1, 87.1, 90.2, 93.2, 96.3],
			25: [78.6, 81.7, 84.9, 88.0, 91.1, 94.2, 97.3],
			26: [79.3, 82.5, 85.6, 88.8, 92.0, 95.2, 98.3],
			27: [79.9, 83.1, 86.4, 89.6, 92.9, 96.1, 99.3],
			28: [80.5, 83.8, 87.1, 90.4, 93.7, 97.0, 100.3],
			29: [81.1, 84.5, 87.8, 91.2, 94.5, 97.9, 101.2],
			30: [81.7, 85.1, 88.5, 91.9, 95.3, 98.7, 102.1],
			31: [82.3, 85.7, 89.2, 92.7, 96.1, 99.6, 103.0],
			32: [82.8, 86.4, 89.9, 93.4, 96.9, 100.4, 103.9],
			33: [83.4, 86.9, 90.5, 94.1, 97.6, 101.2, 104.8],
			34: [83.9, 87.5, 91.1, 94.8, 98.4, 102.0, 105.6],
			35: [84.4, 88.1, 91.8, 95.4, 99.1, 102.7, 106.4],
			36: [85.0, 88.7, 92.4, 96.1, 99.8, 103.5, 107.2],
			37: [85.5, 89.2, 93.0, 96.7, 100.5, 104.2, 108.0],
			38: [86.0, 89.8, 93.6, 97.4, 101.2, 105.0, 108.8],
			39: [86.5, 90.3, 94.2, 98.0, 101.8, 105.7, 109.5],
			40: [87.0, 90.9, 94.7, 98.6, 102.5, 106.4, 110.3],
			41: [87.5, 91.4, 95.3, 99.2, 103.2, 107.1, 111.0],
			42: [88.0, 91.9, 95.9, 99.9, 103.8, 107.8, 111.7],
			43: [88.4, 92.4, 96.4, 100.4, 104.5, 108.5, 112.5],
			44: [88.9, 93.0, 97.0, 101.0, 105.1, 109.1, 113.2],
			45: [89.4, 93.5, 97.5, 101.6, 105.7, 109.8, 113.9],
			46: [89.8, 94.0, 98.1, 102.2, 106.3, 110.4, 114.6],
			47: [90.3, 94.4, 98.6, 102.8, 106.9, 111.1, 115.2],
			48: [90.7, 94.9, 99.1, 103.3, 107.5, 111.7, 115.9],
			49: [91.2, 95.4, 99.7, 103.9, 108.1, 112.4, 116.6],
			50: [91.6, 95.9, 100.2, 104.4, 108.7, 113.0, 117.3],
			51: [92.1, 96.4, 100.7, 105.0, 109.3, 113.6, 117.9],
			52: [92.5, 96.9, 101.2, 105.6, 109.9, 114.2, 118.6],
			53: [93.0, 97.4, 101.7, 106.1, 110.5, 114.9, 119.2],
			54: [93.4, 97.8, 102.3, 106.7, 111.1, 115.5, 119.9],
			55: [93.9, 98.3, 102.8, 107.2, 111.7, 116.1, 120.6],
			56: [94.3, 98.8, 103.3, 107.8, 112.3, 116.7, 121.2],
			57: [94.7, 99.3, 103.8, 108.3, 112.8, 117.4, 121.9],
			58: [95.2, 99.7, 104.3, 108.9, 113.4, 118.0, 122.6],
			59: [95.6, 100.2, 104.8, 109.4, 114.0, 118.6, 123.2],
			60: [96.1, 100.7, 105.3, 110.0, 114.6, 119.2, 123.9],
			61: [96.5, 101.1, 105.7, 110.3, 114.9, 119.4, 124.0],
			62: [96.9, 101.6, 106.2, 110.8, 115.4, 120.0, 124.7],
			63: [97.4, 102.0, 106.7, 111.3, 116.0, 120.6, 125.3],
			64: [97.8, 102.5, 107.2, 111.9, 116.5, 121.2, 125.9],
			65: [98.2, 103.0, 107.7, 112.4, 117.1, 121.8, 126.5],
			66: [98.7, 103.4, 108.2, 112.9, 117.7, 122.4, 127.1],
			67: [99.1, 103.9, 108.7, 113.4, 118.2, 123.0, 127.8],
			68: [99.5, 104.3, 109.1, 113.9, 118.7, 123.6, 128.4],
			69: [99.9, 104.8, 109.6, 114.5, 119.3, 124.1, 129.0],
			70: [100.4, 105.2, 110.1, 115.0, 119.8, 124.7, 129.6],
			71: [100.8, 105.7, 110.6, 115.5, 120.4, 125.2, 130.1],
			72: [101.2, 106.1, 111.0, 116.0, 120.9, 125.8, 130.7],
			73: [101.6, 106.5, 111.5, 116.4, 121.4, 126.4, 131.3],
			74: [102.0, 107.0, 111.9, 116.9, 121.9, 126.9, 131.9],
			75: [102.4, 107.4, 112.4, 117.4, 122.4, 127.5, 132.5],
			76: [102.8, 107.8, 112.9, 117.9, 123.0, 128.0, 133.0],
			77: [103.2, 108.2, 113.3, 118.4, 123.5, 128.5, 133.6],
			78: [103.6, 108.7, 113.8, 118.9, 124.0, 129.1, 134.2],
			79: [103.9, 109.1, 114.2, 119.4, 124.5, 129.6, 134.8],
			80: [104.3, 109.5, 114.7, 119.8, 125.0, 130.2, 135.3],
			81: [104.7, 109.9, 115.1, 120.3, 125.5, 130.7, 135.9],
			82: [105.1, 110.3, 115.6, 120.8, 126.0, 131.2, 136.5],
			83: [105.5, 110.8, 116.0, 121.3, 126.5, 131.8, 137.0],
			84: [105.9, 111.2, 116.4, 121.7, 127.0, 132.3, 137.6]
		},
		1: {
			0: [43.6, 45.4, 47.3, 49.1, 51.0, 52.9, 54.7],
			1: [47.8, 49.8, 51.7, 53.7, 55.6, 57.6, 59.5],
			2: [51.0, 53.0, 55.0, 57.1, 59.1, 61.1, 63.2],
			3: [53.5, 55.6, 57.7, 59.8, 61.9, 64.0, 66.1],
			4: [55.6, 57.8, 59.9, 62.1, 64.3, 66.4, 68.6],
			5: [57.4, 59.6, 61.8, 64.0, 66.2, 68.5, 70.7],
			6: [58.9, 61.2, 63.5, 65.7, 68.0, 70.3, 72.5],
			7: [60.3, 62.7, 65.0, 67.3, 69.6, 71.9, 74.2],
			8: [61.7, 64.0, 66.4, 68.7, 71.1, 73.5, 75.8],
			9: [62.9, 65.3, 67.7, 70.1, 72.6, 75.0, 77.4],
			10: [64.1, 66.5, 69.0, 71.5, 73.9, 76.4, 78.9],
			11: [65.2, 67.7, 70.3, 72.8, 75.3, 77.8, 80.3],
			12: [66.3, 68.9, 71.4, 74.0, 76.6, 79.2, 81.7],
			13: [67.3, 70.0, 72.6, 75.2, 77.8, 80.5, 83.1],
			14: [68.3, 71.0, 73.7, 76.4, 79.1, 81.7, 84.4],
			15: [69.3, 72.0, 74.8, 77.5, 80.2, 83.0, 85.7],
			16: [70.2, 73.0, 75.8, 78.6, 81.4, 84.2, 87.0],
			17: [71.1, 74.0, 76.8, 79.7, 82.5, 85.4, 88.2],
			18: [72.0, 74.9, 77.8, 80.7, 83.6, 86.5, 89.4],
			19: [72.8, 75.8, 78.8, 81.7, 84.7, 87.6, 90.6],
			20: [73.7, 76.7, 79.7, 82.7, 85.7, 88.7, 91.7],
			21: [74.5, 77.5, 80.6, 83.7, 86.7, 89.8, 92.9],
			22: [75.2, 78.4, 81.5, 84.6, 87.7, 90.8, 94.0],
			23: [76.0, 79.2, 82.3, 85.5, 88.7, 91.9, 95.0],
			24: [76.0, 79.3, 82.5, 85.7, 88.9, 92.2, 95.4],
			25: [76.8, 80.0, 83.3, 86.6, 89.9, 93.1, 96.4],
			26: [77.5, 80.8, 84.1, 87.4, 90.8, 94.1, 97.4],
			27: [78.1, 81.5, 84.9, 88.3, 91.7, 95.0, 98.4],
			28: [78.8, 82.2, 85.7, 89.1, 92.5, 96.0, 99.4],
			29: [79.5, 82.9, 86.4, 89.9, 93.4, 96.9, 100.3],
			30: [80.1, 83.6, 87.1, 90.7, 94.2, 97.7, 101.3],
			31: [80.7, 84.3, 87.9, 91.4, 95.0, 98.6, 102.2],
			32: [81.3, 84.9, 88.6, 92.2, 95.8, 99.4, 103.1],
			33: [81.9, 85.6, 89.3, 92.9, 96.6, 100.3, 103.9],
			34: [82.5, 86.2, 89.9, 93.6, 97.4, 101.1, 104.8],
			35: [83.1, 86.8, 90.6, 94.4, 98.1, 101.9, 105.6],
			36: [83.6, 87.4, 91.2, 95.1, 98.9, 102.7, 106.5],
			37: [84.2, 88.0, 91.9, 95.7, 99.6, 103.4, 107.3],
			38: [84.7, 88.6, 92.5, 96.4, 100.3, 104.2, 108.1],
			39: [85.3, 89.2, 93.1, 97.1, 101.0, 105.0, 108.9],
			40: [85.8, 89.8, 93.8, 97.7, 101.7, 105.7, 109.7],
			41: [86.3, 90.4, 94.4, 98.4, 102.4, 106.4, 110.5],
			42: [86.8, 90.9, 95.0, 99.0, 103.1, 107.2, 111.2],
			43: [87.4, 91.5, 95.6, 99.7, 103.8, 107.9, 112.0],
			44: [87.9, 92.0, 96.2, 100.3, 104.5, 108.6, 112.7],
			45: [88.4, 92.5, 96.7, 100.9, 105.1, 109.3, 113.5],
			46: [88.9, 93.1, 97.3, 101.5, 105.8, 110.0, 114.2],
			47: [89.3, 93.6, 97.9, 102.1, 106.4, 110.7, 114.9],
			48: [89.8, 94.1, 98.4, 102.7, 107.0, 111.3, 115.7],
			49: [90.3, 94.6, 99.0, 103.3, 107.7, 112.0, 116.4],
			50: [90.7, 95.1, 99.5, 103.9, 108.3, 112.7, 117.1],
			51: [91.2, 95.6, 100.1, 104.5, 108.9, 113.3, 117.7],
			52: [91.7, 96.1, 100.6, 105.0, 109.5, 114.0, 118.4],
			53: [92.1, 96.6, 101.1, 105.6, 110.1, 114.6, 119.1],
			54: [92.6, 97.1, 101.6, 106.2, 110.7, 115.2, 119.8],
			55: [93.0, 97.6, 102.2, 106.7, 111.3, 115.9, 120.4],
			56: [93.4, 98.1, 102.7, 107.3, 111.9, 116.5, 121.1],
			57: [93.9, 98.5, 103.2, 107.8, 112.5, 117.1, 121.8],
			58: [94.3, 99.0, 103.7, 108.4, 113.0, 117.7, 122.4],
			59: [94.7, 99.5, 104.2, 108.9, 113.6, 118.3, 123.1],
			60: [95.2, 99.9, 104.7, 109.4, 114.2, 118.9, 123.7],
			61: [95.3, 100.1, 104.8, 109.6, 114.4, 119.1, 123.9],
			62: [95.7, 100.5, 105.3, 110.1, 114.9, 119.7, 124.5],
			63: [96.1, 101.0, 105.8, 110.6, 115.5, 120.3, 125.2],
			64: [96.5, 101.4, 106.3, 111.2, 116.0, 120.9, 125.8],
			65: [97.0, 101.9, 106.8, 111.7, 116.6, 121.5, 126.4],
			66: [97.4, 102.3, 107.2, 112.2, 117.1, 122.0, 127.0],
			67: [97.8, 102.7, 107.7, 112.7, 117.6, 122.6, 127.6],
			68: [98.2, 103.2, 108.2, 113.2, 118.2, 123.2, 128.2],
			69: [98.6, 103.6, 108.6, 113.7, 118.7, 123.7, 128.8],
			70: [99.0, 104.0, 109.1, 114.2, 119.2, 124.3, 129.3],
			71: [99.4, 104.5, 109.6, 114.6, 119.7, 124.8, 129.9],
			72: [99.8, 104.9, 110.0, 115.1, 120.2, 125.4, 130.5],
			73: [100.2, 105.3, 110.5, 115.6, 120.8, 125.9, 131.1],
			74: [100.5, 105.7, 110.9, 116.1, 121.3, 126.4, 131.6],
			75: [100.9, 106.1, 111.3, 116.6, 121.8, 127.0, 132.2],
			76: [101.3, 106.6, 111.8, 117.0, 122.3, 127.5, 132.7],
			77: [101.7, 107.0, 112.2, 117.5, 122.8, 128.0, 133.3],
			78: [102.1, 107.4, 112.7, 118.0, 123.3, 128.6, 133.9],
			79: [102.5, 107.8, 113.1, 118.4, 123.8, 129.1, 134.4],
			80: [102.9, 108.2, 113.6, 118.9, 124.3, 129.6, 135.0],
			81: [103.2, 108.6, 114.0, 119.4, 124.8, 130.2, 135.5],
			82: [103.6, 109.0, 114.5, 119.9, 125.3, 130.7, 136.1],
			83: [104.0, 109.5, 114.9, 120.3, 125.8, 131.2, 136.7],
			84: [104.4, 109.9, 115.3, 120.8, 126.3, 131.7, 137.2]
		}
	},
	weight: {
		0: {
			0: [2.1, 2.5, 2.9, 3.3, 3.9, 4.4, 5.0],
			1: [2.9, 3.4, 3.9, 4.5, 5.1, 5.8, 6.6],
			2: [3.8, 4.3, 4.9, 5.6, 6.3, 7.1, 8.0],
			3: [4.4, 5.0, 5.7, 6.4, 7.2, 8.0, 9.0],
			4: [4.9, 5.6, 6.2, 7.0, 7.8, 8.7, 9.7],
			5: [5.3, 6.0, 6.7, 7.5, 8.4, 9.3, 10.4],
			6: [5.7, 6.4, 7.1, 7.9, 8.8, 9.8, 10.9],
			7: [5.9, 6.7, 7.4, 8.3, 9.2, 10.3, 11.4],
			8: [6.2, 6.9, 7.7, 8.6, 9.6, 10.7, 11.9],
			9: [6.4, 7.1, 8.0, 8.9, 9.9, 11.0, 12.3],
			10: [6.6, 7.4, 8.2, 9.2, 10.2, 11.4, 12.7],
			11: [6.8, 7.6, 8.4, 9.4, 10.5, 11.7, 13.0],
			12: [6.9, 7.7, 8.6, 9.6, 10.8, 12.0, 13.3],
			13: [7.1, 7.9, 8.8, 9.9, 11.0, 12.3, 13.7],
			14: [7.2, 8.1, 9.0, 10.1, 11.3, 12.6, 14.0],
			15: [7.4, 8.3, 9.2, 10.3, 11.5, 12.8, 14.3],
			16: [7.5, 8.4, 9.4, 10.5, 11.7, 13.1, 14.6],
			17: [7.7, 8.6, 9.6, 10.7, 12.0, 13.4, 14.9],
			18: [7.8, 8.8, 9.8, 10.9, 12.2, 13.7, 15.3],
			19: [8.0, 8.9, 10.0, 11.1, 12.5, 13.9, 15.6],
			20: [8.1, 9.1, 10.1, 11.3, 12.7, 14.2, 15.9],
			21: [8.2, 9.2, 10.3, 11.5, 12.9, 14.5, 16.2],
			22: [8.4, 9.4, 10.5, 11.8, 13.2, 14.7, 16.5],
			23: [8.5, 9.5, 10.7, 12.0, 13.4, 15.0, 16.8],
			24: [8.6, 9.7, 10.8, 12.2, 13.6, 15.3, 17.1],
			25: [8.8, 9.8, 11.0, 12.4, 13.9, 15.5, 17.5],
			26: [8.9, 10.0, 11.2, 12.5, 14.1, 15.8, 17.8],
			27: [9.0, 10.1, 11.3, 12.7, 14.3, 16.1, 18.1],
			28: [9.1, 10.2, 11.5, 12.9, 14.5, 16.3, 18.4],
			29: [9.2, 10.4, 11.7, 13.1, 14.8, 16.6, 18.7],
			30: [9.4, 10.5, 11.8, 13.3, 15.0, 16.9, 19.0],
			31: [9.5, 10.7, 12.0, 13.5, 15.2, 17.1, 19.3],
			32: [9.6, 10.8, 12.1, 13.7, 15.4, 17.4, 19.6],
			33: [9.7, 10.9, 12.3, 13.8, 15.6, 17.6, 19.9],
			34: [9.8, 11.0, 12.4, 14.0, 15.8, 17.8, 20.2],
			35: [9.9, 11.2, 12.6, 14.2, 16.0, 18.1, 20.4],
			36: [10.0, 11.3, 12.7, 14.3, 16.2, 18.3, 20.7],
			37: [10.1, 11.4, 12.9, 14.5, 16.4, 18.6, 21.0],
			38: [10.2, 11.5, 13.0, 14.7, 16.6, 18.8, 21.3],
			39: [10.3, 11.6, 13.1, 14.8, 16.8, 19.0, 21.6],
			40: [10.4, 11.8, 13.3, 15.0, 17.0, 19.3, 21.9],
			41: [10.5, 11.9, 13.4, 15.2, 17.2, 19.5, 22.1],
			42: [10.6, 12.0, 13.6, 15.3, 17.4, 19.7, 22.4],
			43: [10.7, 12.1, 13.7, 15.5, 17.6, 20.0, 22.7],
			44: [10.8, 12.2, 13.8, 15.7, 17.8, 20.2, 23.0],
			45: [10.9, 12.4, 14.0, 15.8, 18.0, 20.5, 23.3],
			46: [11.0, 12.5, 14.1, 16.0, 18.2, 20.7, 23.6],
			47: [11.1, 12.6, 14.3, 16.2, 18.4, 20.9, 23.9],
			48: [11.2, 12.7, 14.4, 16.3, 18.6, 21.2, 24.2],
			49: [11.3, 12.8, 14.5, 16.5, 18.8, 21.4, 24.5],
			50: [11.4, 12.9, 14.7, 16.7, 19.0, 21.7, 24.8],
			51: [11.5, 13.1, 14.8, 16.8, 19.2, 21.9, 25.1],
			52: [11.6, 13.2, 15.0, 17.0, 19.4, 22.2, 25.4],
			53: [11.7, 13.3, 15.1, 17.2, 19.6, 22.4, 25.7],
			54: [11.8, 13.4, 15.2, 17.3, 19.8, 22.7, 26.0],
			55: [11.9, 13.5, 15.4, 17.5, 20.0, 22.9, 26.3],
			56: [12.0, 13.6, 15.5, 17.7, 20.2, 23.2, 26.6],
			57: [12.1, 13.7, 15.6, 17.8, 20.4, 23.4, 26.9],
			58: [12.2, 13.8, 15.8, 18.0, 20.6, 23.7, 27.2],
			59: [12.3, 14.0, 15.9, 18.2, 20.8, 23.9, 27.6],
			60: [12.4, 14.1, 16.0, 18.3, 21.0, 24.2, 27.9],
			61: [12.7, 14.4, 16.3, 18.5, 21.1, 24.2, 27.8],
			62: [12.8, 14.5, 16.4, 18.7, 21.3, 24.4, 28.1],
			63: [13.0, 14.6, 16.6, 18.9, 21.5, 24.7, 28.4],
			64: [13.1, 14.8, 16.7, 19.0, 21.7, 24.9, 28.8],
			65: [13.2, 14.9, 16.9, 19.2, 22.0, 25.2, 29.1],
			66: [13.3, 15.0, 17.0, 19.4, 22.2, 25.5, 29.4],
			67: [13.4, 15.2, 17.2, 19.6, 22.4, 25.7, 29.8],
			68: [13.6, 15.3, 17.4, 19.8, 22.6, 26.0, 30.1],
			69: [13.7, 15.4, 17.5, 19.9, 22.8, 26.3, 30.4],
			70: [13.8, 15.6, 17.7, 20.1, 23.1, 26.6, 30.8],
			71: [13.9, 15.7, 17.8, 20.3, 23.3, 26.8, 31.2],
			72: [14.1, 15.9, 18.0, 20.5, 23.5, 27.1, 31.5],
			73: [14.2, 16.0, 18.2, 20.7, 23.7, 27.4, 31.9],
			74: [14.3, 16.2, 18.3, 20.9, 24.0, 27.7, 32.2],
			75: [14.5, 16.3, 18.5, 21.1, 24.2, 28.0, 32.6],
			76: [14.6, 16.5, 18.7, 21.3, 24.4, 28.3, 33.0],
			77: [14.7, 16.6, 18.8, 21.5, 24.7, 28.6, 33.3],
			78: [14.9, 16.8, 19.0, 21.7, 24.9, 28.9, 33.7],
			79: [15.0, 16.9, 19.2, 21.9, 25.2, 29.2, 34.1],
			80: [15.1, 17.1, 19.3, 22.1, 25.4, 29.5, 34.5],
			81: [15.3, 17.2, 19.5, 22.3, 25.6, 29.8, 34.9],
			82: [15.4, 17.4, 19.7, 22.5, 25.9, 30.1, 35.3],
			83: [15.5, 17.5, 19.9, 22.7, 26.1, 30.4, 35.7],
			84: [15.7, 17.7, 20.0, 22.9, 26.4, 30.7, 36.1]
		},
		1: {
			0: [2.0, 2.4, 2.8, 3.2, 3.7, 4.2, 4.8],
			1: [2.7, 3.2, 3.6, 4.2, 4.8, 5.5, 6.2],
			2: [3.4, 3.9, 4.5, 5.1, 5.8, 6.6, 7.5],
			3: [4.0, 4.5, 5.2, 5.8, 6.6, 7.5, 8.5],
			4: [4.4, 5.0, 5.7, 6.4, 7.3, 8.2, 9.3],
			5: [4.8, 5.4, 6.1, 6.9, 7.8, 8.8, 10.0],
			6: [5.1, 5.7, 6.5, 7.3, 8.2, 9.3, 10.6],
			7: [5.3, 6.0, 6.8, 7.6, 8.6, 9.8, 11.1],
			8: [5.6, 6.3, 7.0, 7.9, 9.0, 10.2, 11.6],
			9: [5.8, 6.5, 7.3, 8.2, 9.3, 10.5, 12.0],
			10: [5.9, 6.7, 7.5, 8.5, 9.6, 10.9, 12.4],
			11: [6.1, 6.9, 7.7, 8.7, 9.9, 11.2, 12.8],
			12: [6.3, 7.0, 7.9, 8.9, 10.1, 11.5, 13.1],
			13: [6.4, 7.2, 8.1, 9.2, 10.4, 11.8, 13.5],
			14: [6.6, 7.4, 8.3, 9.4, 10.6, 12.1, 13.8],
			15: [6.7, 7.6, 8.5, 9.6, 10.9, 12.4, 14.1],
			16: [6.9, 7.7, 8.7, 9.8, 11.1, 12.6, 14.5],
			17: [7.0, 7.9, 8.9, 10.0, 11.4, 12.9, 14.8],
			18: [7.2, 8.1, 9.1, 10.2, 11.6, 13.2, 15.1],
			19: [7.3, 8.2, 9.2, 10.4, 11.8, 13.5, 15.4],
			20: [7.5, 8.4, 9.4, 10.6, 12.1, 13.7, 15.7],
			21: [7.6, 8.6, 9.6, 10.9, 12.3, 14.0, 16.0],
			22: [7.8, 8.7, 9.8, 11.1, 12.5, 14.3, 16.4],
			23: [7.9, 8.9, 10.0, 11.3, 12.8, 14.6, 16.7],
			24: [8.1, 9.0, 10.2, 11.5, 13.0, 14.8, 17.0],
			25: [8.2, 9.2, 10.3, 11.7, 13.3, 15.1, 17.3],
			26: [8.4, 9.4, 10.5, 11.9, 13.5, 15.4, 17.7],
			27: [8.5, 9.5, 10.7, 12.1, 13.7, 15.7, 18.0],
			28: [8.6, 9.7, 10.9, 12.3, 14.0, 16.0, 18.3],
			29: [8.8, 9.8, 11.1, 12.5, 14.2, 16.2, 18.7],
			30: [8.9, 10.0, 11.2, 12.7, 14.4, 16.5, 19.0],
			31: [9.0, 10.1, 11.4, 12.9, 14.7, 16.8, 19.3],
			32: [9.1, 10.3, 11.6, 13.1, 14.9, 17.1, 19.6],
			33: [9.3, 10.4, 11.7, 13.3, 15.1, 17.3, 20.0],
			34: [9.4, 10.5, 11.9, 13.5, 15.4, 17.6, 20.3],
			35: [9.5, 10.7, 12.0, 13.7, 15.6, 17.9, 20.6],
			36: [9.6, 10.8, 12.2, 13.9, 15.8, 18.1, 20.9],
			37: [9.7, 10.9, 12.4, 14.0, 16.0, 18.4, 21.3],
			38: [9.8, 11.1, 12.5, 14.2, 16.3, 18.7, 21.6],
			39: [9.9, 11.2, 12.7, 14.4, 16.5, 19.0, 22.0],
			40: [10.1, 11.3, 12.8, 14.6, 16.7, 19.2, 22.3],
			41: [10.2, 11.5, 13.0, 14.8, 16.9, 19.5, 22.7],
			42: [10.3, 11.6, 13.1, 15.0, 17.2, 19.8, 23.0],
			43: [10.4, 11.7, 13.3, 15.2, 17.4, 20.1, 23.4],
			44: [10.5, 11.8, 13.4, 15.3, 17.6, 20.4, 23.7],
			45: [10.6, 12.0, 13.6, 15.5, 17.8, 20.7, 24.1],
			46: [10.7, 12.1, 13.7, 15.7, 18.1, 20.9, 24.5],
			47: [10.8, 12.2, 13.9, 15.9, 18.3, 21.2, 24.8],
			48: [10.9, 12.3, 14.0, 16.1, 18.5, 21.5, 25.2],
			49: [11.0, 12.4, 14.2, 16.3, 18.8, 21.8, 25.5],
			50: [11.1, 12.6, 14.3, 16.4, 19.0, 22.1, 25.9],
			51: [11.2, 12.7, 14.5, 16.6, 19.2, 22.4, 26.3],
			52: [11.3, 12.8, 14.6, 16.8, 19.4, 22.6, 26.6],
			53: [11.4, 12.9, 14.8, 17.0, 19.7, 22.9, 27.0],
			54: [11.5, 13.0, 14.9, 17.2, 19.9, 23.2, 27.4],
			55: [11.6, 13.2, 15.1, 17.3, 20.1, 23.5, 27.7],
			56: [11.7, 13.3, 15.2, 17.5, 20.3, 23.8, 28.1],
			57: [11.8, 13.4, 15.3, 17.7, 20.6, 24.1, 28.5],
			58: [11.9, 13.5, 15.5, 17.9, 20.8, 24.4, 28.8],
			59: [12.0, 13.6, 15.6, 18.0, 21.0, 24.6, 29.2],
			60: [12.1, 13.7, 15.8, 18.2, 21.2, 24.9, 29.5],
			61: [12.4, 14.0, 15.9, 18.3, 21.2, 24.8, 29.5],
			62: [12.5, 14.1, 16.0, 18.4, 21.4, 25.1, 29.8],
			63: [12.6, 14.2, 16.2, 18.6, 21.6, 25.4, 30.2],
			64: [12.7, 14.3, 16.3, 18.8, 21.8, 25.6, 30.5],
			65: [12.8, 14.4, 16.5, 19.0, 22.0, 25.9, 30.9],
			66: [12.9, 14.6, 16.6, 19.1, 22.2, 26.2, 31.3],
			67: [13.0, 14.7, 16.8, 19.3, 22.5, 26.5, 31.6],
			68: [13.1, 14.8, 16.9, 19.5, 22.7, 26.7, 32.0],
			69: [13.2, 14.9, 17.0, 19.6, 22.9, 27.0, 32.3],
			70: [13.3, 15.0, 17.2, 19.8, 23.1, 27.3, 32.7],
			71: [13.4, 15.2, 17.3, 20.0, 23.3, 27.6, 33.1],
			72: [13.5, 15.3, 17.5, 20.2, 23.5, 27.8, 33.4],
			73: [13.6, 15.4, 17.6, 20.3, 23.8, 28.1, 33.8],
			74: [13.7, 15.5, 17.8, 20.5, 24.0, 28.4, 34.2],
			75: [13.8, 15.6, 17.9, 20.7, 24.2, 28.7, 34.6],
			76: [13.9, 15.8, 18.0, 20.9, 24.4, 29.0, 35.0],
			77: [14.0, 15.9, 18.2, 21.0, 24.6, 29.3, 35.4],
			78: [14.1, 16.0, 18.3, 21.2, 24.9, 29.6, 35.8],
			79: [14.2, 16.1, 18.5, 21.4, 25.1, 29.9, 36.2],
			80: [14.3, 16.3, 18.6, 21.6, 25.3, 30.2, 36.6],
			81: [14.4, 16.4, 18.8, 21.8, 25.6, 30.5, 37.0],
			82: [14.5, 16.5, 18.9, 22.0, 25.8, 30.8, 37.4],
			83: [14.6, 16.6, 19.1, 22.2, 26.1, 31.1, 37.8],
			84: [14.8, 16.8, 19.3, 22.4, 26.3, 31.4, 38.3]
		}
	}
};

exports.default = _childGrowthData;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__(119);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_a7035278_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__(200);
var disposed = false
var normalizeComponent = __webpack_require__(67)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_a7035278_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\page\\child\\add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7035278", Component.options)
  } else {
    hotAPI.reload("data-v-a7035278", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_record_vue__ = __webpack_require__(120);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_0e11aa7e_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_record_vue__ = __webpack_require__(494);
var disposed = false
var normalizeComponent = __webpack_require__(67)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_6_2_vue_loader_lib_selector_type_script_index_0_record_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_6_2_vue_loader_lib_template_compiler_index_id_data_v_0e11aa7e_hasScoped_false_buble_transforms_node_modules_13_6_2_vue_loader_lib_selector_type_template_index_0_record_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\page\\child\\record.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e11aa7e", Component.options)
  } else {
    hotAPI.reload("data-v-0e11aa7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-header-main" },
    [
      _c(
        "div",
        { staticClass: "pd-10 bg-white" },
        [
          _c(
            "mt-navbar",
            {
              model: {
                value: _vm.type,
                callback: function($$v) {
                  _vm.type = $$v
                },
                expression: "type"
              }
            },
            [
              _c("mt-tab-item", { attrs: { id: "height" } }, [_vm._v("身高")]),
              _vm._v(" "),
              _c("mt-tab-item", { attrs: { id: "weight" } }, [_vm._v("体重")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.type == "height"
        ? _c("div", [
            _vm.heightList.length == 0
              ? _c("div", { staticClass: "pd-10 text-center" }, [
                  _c("h1", { staticClass: "fontsize-normal" }, [
                    _vm._v("无身高记录")
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "weight"
        ? _c("div", [
            _vm.weightList.length == 0
              ? _c("div", { staticClass: "pd-10 text-center" }, [
                  _c("h1", { staticClass: "fontsize-normal" }, [
                    _vm._v("无体重记录")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "fontsize-small" }, [
                    _vm._v('点击右上角"添加",输入宝宝的第一条生长记录')
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        style: { width: _vm.echartWidth, height: _vm.echartHeight + "px" },
        attrs: { id: "echart" }
      }),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm.type == "height"
        ? _c("div", [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { cellpadding: "0", cellspacing: "0" }
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _vm._l(_vm.categoryData, function(item, index) {
                  return _c("tr", { staticClass: "text-center" }, [
                    _c("td", [
                      _vm._v("\n\t    \t\t" + _vm._s(item)),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "color-desc fontsize-small" }, [
                        _vm._v(_vm._s(_vm.getAgeDate(index)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.height(index)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.growHeight(index)))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "mt-button",
                          {
                            attrs: { type: "default", size: "small" },
                            on: {
                              click: function($event) {
                                _vm.editRecord(index)
                              }
                            }
                          },
                          [
                            _vm.height(index) != "-"
                              ? _c("span", [_vm._v("修改")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.height(index) == "-"
                              ? _c("span", [_vm._v("录入")])
                              : _vm._e()
                          ]
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _vm.height(index) > 0
                          ? _c(
                              "mt-button",
                              {
                                staticClass: "mrt-10",
                                attrs: { type: "danger", size: "small" },
                                on: {
                                  click: function($event) {
                                    _vm.deleteRecord(index)
                                  }
                                }
                              },
                              [_vm._v("删除")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                })
              ],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "weight"
        ? _c("div", [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { cellpadding: "0", cellspacing: "0" }
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _vm._l(_vm.categoryData, function(item, index) {
                  return _c("tr", { staticClass: "text-center" }, [
                    _c("td", [
                      _vm._v("\n\t    \t\t" + _vm._s(item)),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "color-desc fontsize-small" }, [
                        _vm._v(_vm._s(_vm.getAgeDate(index)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.weight(index)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.growWeight(index)))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "mt-button",
                          {
                            attrs: { type: "default", size: "small" },
                            on: {
                              click: function($event) {
                                _vm.editRecord(index)
                              }
                            }
                          },
                          [
                            _vm.weight(index) != "-"
                              ? _c("span", [_vm._v("修改")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.weight(index) == "-"
                              ? _c("span", [_vm._v("录入")])
                              : _vm._e()
                          ]
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _vm.weight(index) > 0
                          ? _c(
                              "mt-button",
                              {
                                staticClass: "mrt-10",
                                attrs: { type: "danger", size: "small" },
                                on: {
                                  click: function($event) {
                                    _vm.deleteRecord(index)
                                  }
                                }
                              },
                              [_vm._v("删除")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                })
              ],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          ref: "formPopup",
          staticClass: "baby-record-popup",
          attrs: {
            "popup-transition": "popup-fade",
            closeOnClickModal: "false"
          },
          model: {
            value: _vm.popupShow,
            callback: function($$v) {
              _vm.popupShow = $$v
            },
            expression: "popupShow"
          }
        },
        [
          _c("div", { staticClass: "baby-record-form" }, [
            _c("div", { staticClass: "mint-cells-form" }, [
              _c("div", { staticClass: "mint-cell" }, [
                _c("label", { staticClass: "mint-cell-form-label" }, [
                  _vm._v("宝宝年龄:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mint-cell-primary" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.ageText,
                        expression: "form.ageText"
                      }
                    ],
                    staticClass: "minit-cell-form-input mrt-10",
                    attrs: {
                      onfocus: "this.blur()",
                      type: "text",
                      placeholder: "请选择年龄",
                      readonly: ""
                    },
                    domProps: { value: _vm.form.ageText },
                    on: {
                      click: function($event) {
                        _vm.openPicker("age")
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "ageText", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mint-cells-form" }, [
              _c("div", { staticClass: "mint-cell" }, [
                _c("label", { staticClass: "mint-cell-form-label" }, [
                  _vm._v("宝宝身高:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mint-cell-primary" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.height,
                        expression: "form.height"
                      }
                    ],
                    staticClass: "minit-cell-form-input mrt-10",
                    attrs: {
                      onfocus: "this.blur()",
                      type: "text",
                      placeholder: "请输入身高",
                      readonly: ""
                    },
                    domProps: { value: _vm.form.height },
                    on: {
                      click: function($event) {
                        _vm.openPicker("height")
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "height", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mint-cells-form" }, [
              _c("div", { staticClass: "mint-cell" }, [
                _c("label", { staticClass: "mint-cell-form-label" }, [
                  _vm._v("宝宝体重:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mint-cell-primary" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.weight,
                        expression: "form.weight"
                      }
                    ],
                    staticClass: "minit-cell-form-input mrt-10",
                    attrs: {
                      onfocus: "this.blur()",
                      type: "text",
                      placeholder: "请输入体重",
                      readonly: ""
                    },
                    domProps: { value: _vm.form.weight },
                    on: {
                      click: function($event) {
                        _vm.openPicker("weight")
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "weight", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center mrt-50" },
              [
                _c(
                  "mt-button",
                  {
                    staticStyle: { width: "100%" },
                    attrs: { type: "primary" },
                    on: { click: _vm.saveData }
                  },
                  [_vm._v("保存")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          attrs: { position: "bottom", closeOnClickModal: "false" },
          model: {
            value: _vm.agePopupShow,
            callback: function($$v) {
              _vm.agePopupShow = $$v
            },
            expression: "agePopupShow"
          }
        },
        [
          _c(
            "mt-picker",
            {
              ref: "agePicker",
              attrs: {
                showToolbar: true,
                valueKey: "key",
                slots: _vm.slotsData.age,
                "visible-item-count": 5
              },
              on: { change: _vm.onAgeChange }
            },
            [
              _vm._t("toolbar", [
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-confirm",
                    attrs: { type: "primary", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("age")
                      }
                    }
                  },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-cancel",
                    attrs: { type: "default", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("age")
                      }
                    }
                  },
                  [_vm._v("关闭")]
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          attrs: { position: "bottom", closeOnClickModal: "false" },
          model: {
            value: _vm.heightPopupShow,
            callback: function($$v) {
              _vm.heightPopupShow = $$v
            },
            expression: "heightPopupShow"
          }
        },
        [
          _c(
            "mt-picker",
            {
              ref: "heightPicker",
              attrs: {
                showToolbar: true,
                slots: _vm.slotsData.height,
                "visible-item-count": 5
              },
              on: { change: _vm.onHeightChange }
            },
            [
              _vm._t("toolbar", [
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-confirm",
                    attrs: { type: "primary", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("height")
                      }
                    }
                  },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-cancel",
                    attrs: { type: "default", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("height")
                      }
                    }
                  },
                  [_vm._v("关闭")]
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          attrs: { position: "bottom", closeOnClickModal: "false" },
          model: {
            value: _vm.weightPopupShow,
            callback: function($$v) {
              _vm.weightPopupShow = $$v
            },
            expression: "weightPopupShow"
          }
        },
        [
          _c(
            "mt-picker",
            {
              ref: "weightPicker",
              attrs: {
                showToolbar: true,
                slots: _vm.slotsData.weight,
                "visible-item-count": 5
              },
              on: { change: _vm.onWeightChange }
            },
            [
              _vm._t("toolbar", [
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-confirm",
                    attrs: { type: "primary", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("weight")
                      }
                    }
                  },
                  [_vm._v("确定")]
                ),
                _vm._v(" "),
                _c(
                  "mt-button",
                  {
                    staticClass: "toolbar-btn-cancel",
                    attrs: { type: "default", size: "small" },
                    on: {
                      click: function($event) {
                        _vm.closePicker("weight")
                      }
                    }
                  },
                  [_vm._v("关闭")]
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "fontsize-small" }, [
      _vm._v('点击右上角"'),
      _c("span", { staticClass: "el-icon-circle-plus-outline" }),
      _vm._v('",输入宝宝的第一条生长记录')
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pd-10 text-justify fontsize-small" }, [
      _c("p", [_vm._v("注:以上数据来自世界卫生组织WHO的儿童成长标准。")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("th", { attrs: { width: "25%" } }, [_vm._v("宝宝年龄")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("身高(cm)")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("增长")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("操作")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("th", { attrs: { width: "25%" } }, [_vm._v("宝宝年龄")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("体高(kg)")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("增加")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "25%" } }, [_vm._v("操作")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5db0c77a", esExports)
  }
}

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "mt-header",
        { attrs: { fixed: "", title: _vm.nickName + "的生长记录" } },
        [
          _c(
            "router-link",
            { attrs: { slot: "left", to: { name: "home" } }, slot: "left" },
            [_c("mt-button", { staticClass: "el-icon-arrow-left" })],
            1
          ),
          _vm._v(" "),
          _c("mt-button", {
            staticClass: "el-icon-circle-plus-outline",
            attrs: { slot: "right" },
            on: { click: _vm.addRecord },
            slot: "right"
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("childGrowthChart", {
        ref: "growthChart",
        attrs: { childData: _vm.childData, id: _vm.id }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0e11aa7e", esExports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

});