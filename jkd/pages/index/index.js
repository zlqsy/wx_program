//index.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');

//获取应用实例
var app = getApp();

Page({
    data: {
        posName: '定位中...',
        adList: [],     // banner图列表
        actList: [],    // 活动列表
        pageSize: 20,    // 当前页显示商品数量
        pageIndex: 1,    // 当前请求的第几页
        proCount: 0,     // 返回商品总个数
        goodsListResult: {
            goodsList: [],
        },   // 商品列表
        hidden: false,      // 加载中...是否显示
        scrollHeight: 0,    // scroll-view高度
        scrollTop: 0,       // 加载更多，当前位置
        onOff: true,        // 控制重复加载；
    },
    onLoad: function () {
        this.fnGetScrollHeight();
        //this.fnGetLocation();
        // swiper轮播图 -- 后台接口还没有改 - 添加微信WeChat,等添加之后再请求就可以了；
        this.fnSwiper();
        this.fnActList();
    },
    onShow: function () {
        // 改变地址后，再调用下；
        this.fnGetLocation();
    },
    fnGetScrollHeight: function () {
        //  **微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在onLoad事件中给scroll-view的高度赋值
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    scrollHeight: res.windowHeight
                })
            }
        })
    },
    fnGetLocation: function () {    //百度针对微信小程序逆地址解析
        var _this = this;
        // 从缓存中拿取数据，渲染到页面上；
        wx.getStorage({
            key: 'jkd_address',
            success: function (res) {
                _this.setData({
                    posName: res.data.curLocation
                })
                //如果有缓存，则从缓存中读取数据，并且得请求接口；
                _this.fnProductlist(_this.data.pageIndex);
            },
            fail: function () {
                // 新建百度地图对象 
                var BMap = new bmap.BMapWX({
                    ak: 'BrI4B8vgB7bG45xnLfcpGdG3'
                });
                var fail = function (data) {
                    console.log(data)
                    _this.setData({
                        'hidden': true
                    })
                };
                var success = function (data) {
                    var originalDataResult = data.originalData.result;

                    // 将自动定位的经纬度，存储在缓存中；
                    wx.setStorage({
                        key: 'jkd_lat_lng',
                        data: {
                            lat: originalDataResult.location.lat,
                            lng: originalDataResult.location.lng
                        }
                    })

                    // 把百度逆解析到的地址、城市，存储在缓存中
                    wx.setStorage({
                        key: 'jkd_address',
                        data: {
                            curCity: originalDataResult.addressComponent.city,
                            country: originalDataResult.addressComponent.country,
                            direction: originalDataResult.addressComponent.direction,
                            distance: originalDataResult.addressComponent.distance,
                            district: originalDataResult.addressComponent.district,
                            province: originalDataResult.addressComponent.province,
                            street: originalDataResult.addressComponent.street,
                            street_number: originalDataResult.addressComponent.street_number,
                            curLocation: originalDataResult.formatted_address,
                            lat: originalDataResult.location.lat,
                            lng: originalDataResult.location.lng
                        }
                    })

                    // 设置获取到的当前位置，及请求商品列表接口
                    _this.setData({
                        posName: originalDataResult.formatted_address
                    })
                    _this.fnProductlist(_this.data.pageIndex);

                }
                // 发起regeocoding检索请求 
                BMap.regeocoding({
                    fail: fail,
                    success: success
                });

            }
        })
    },
    fnSwiper: function () {
        this.setData({
            adList: [
                {
                    "id": 1,
                    "link": "http://www.jiukuaidao.com",
                    "img": "http://img10.test.jiukuaidao.com/pic/2017/0215/e46251065ff74113af69cb616b3f28d5j.jpg"
                },
                {
                    "id": 2,
                    "link": "http://www.jiukuaidao.com",
                    "img": "http://img10.test.jiukuaidao.com/pic/2016/1026/acaf94cd821e4fa69144114e436e59abj.jpg"
                }
            ]
        })
    },
    fnActList: function () {
        this.setData({
            actList: [
                {
                    "id": 1,
                    "link": "只能为内部链接",
                    "img": "http://img10.test.jiukuaidao.com/product/2016/0510/31d88cb9cb334ce7b8baa5e8cc6eac29j.jpg"
                },

            ]
        })
    },
    fnProductlist: function (iPage) {
        let _this = this;
        let pageSize = this.data.pageSize;
        let pageIndex = iPage;
        this.setData({
            hidden: false
        })
        // 从历史记录中获取jkd_address;
        wx.getStorage({
            key: 'jkd_address',
            success: function (res) {
                let jkdAddress = {};
                jkdAddress.city = res.data.curCity;
                jkdAddress.country = res.data.country;
                jkdAddress.district = res.data.district;
                jkdAddress.province = res.data.province;
                jkdAddress.curLocation = res.data.curLocation;
                jkdAddress.lat = parseFloat(res.data.lat);
                jkdAddress.lng = parseFloat(res.data.lng);

                wx.request({
                    url: 'http://shop.api.test.jiukuaidao.com/jkd1/product/hot_pro_list.htm?app_key=&ip=&pageSize=' + pageSize + '&custom_longitude=' + jkdAddress.lng + '&sysv=8.1&curr_latitude=' + jkdAddress.lat + '&curr_street=' + jkdAddress.curLocation + '&version=1.0.1&curr_longitude=' + jkdAddress.lng + '&custom_latitude=' + jkdAddress.lat + '&custom_district=' + jkdAddress.district + '&device_token=0&curr_province=' + jkdAddress.province + '&curr_district=' + jkdAddress.district + '&custom_province=' + jkdAddress.province + '&pageIndex=' + pageIndex + '&user_code=&device_type=WeChat&curr_city=' + jkdAddress.city + '&custom_city=' + jkdAddress.city,
                    data: {
                    },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    // header: {}, // 设置请求的 header
                    success: function (res) {
                        // success
                        if (pageIndex == 1) {
                            _this.setData({
                                goodsListResult: {
                                    goodsList: res.data.result.goodsList
                                }
                            })

                        } else {
                            //加载更多
                            _this.setData({
                                goodsListResult: {
                                    goodsList: _this.data.goodsListResult.goodsList.concat(res.data.result.goodsList),
                                }
                            })
                        }
                        _this.setData({
                            proCount: res.data.result.proCount,
                            onOff: true
                        })
                        console.log(_this.data.goodsListResult);
                    },
                    fail: function () {
                        // fail
                        console.log('fail');
                    },
                    complete: function () {
                        // complete
                        wx.hideNavigationBarLoading() //完成停止加载
                        wx.stopPullDownRefresh() //停止下拉刷新
                        _this.setData({
                            hidden: true
                        })
                    }
                })
            }
        })

    },
    fnScrollTop: function (e) {
        //下拉  
        wx.showNavigationBarLoading() //在标题栏中显示加载
        this.fnProductlist(this.data.pageIndex);
        console.log('到顶部了')
    },
    fnScrollBottom: function (e) {
        console.log('到底部了')
        var _this = this;
        if (this.data.pageIndex <= Math.ceil(this.data.proCount / this.data.pageSize) && this.data.onOff) {
            this.setData({
                pageIndex: _this.data.pageIndex + 1,
                onOff: false
            })
            console.log(_this.data.pageIndex)
            this.fnProductlist(_this.data.pageIndex);
        }

    },
    fnScroll: function (event) {
        // 页面滚动时候，记录scrollTop, 为了请求数据之后，把页面定位到当前来；
        this.setData({
            scrollTop: event.detail.scrollTop
        })
    }
})
