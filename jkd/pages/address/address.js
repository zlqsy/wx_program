// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');

Page({
    data: {
        locationtxt: '定位到当前位置',
        focus: true,
        noItem: false,
        searchItem: [],
        noLocation: true,
        source: '',
        addressList: {}
    },
    onLoad: function (options) {
        this.setData({
            source: options.source
        })
        this.getAddressList()
    },
    fnLocation: function () {
        var _this = this;
        var source = this.data.source;
        this.setData({
            locationtxt: '定位中...'
        })
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({
            ak: 'BrI4B8vgB7bG45xnLfcpGdG3'
        });
        var fail = function (data) {
            console.log(data)
            _this.setData({
                locationtxt: '网络出了个小差，稍后再试哟'
            })
        };
        var success = function (data) {
            var originalDataResult = data.originalData.result;

            if (source == 'home') {

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

            } else if (source == 'add') {

                // 将自动定位的经纬度，存储在缓存中；
                wx.setStorage({
                    key: 'newly_lat_lng',
                    data: {
                        lat: originalDataResult.location.lat,
                        lng: originalDataResult.location.lng
                    }
                })

                // 把百度逆解析到的地址、城市，存储在缓存中
                wx.setStorage({
                    key: 'newly_address',
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
            }

            // 定位成功，返回首页
            wx.navigateBack();

        }
        // 发起regeocoding检索请求 
        BMap.regeocoding({
            fail: fail,
            success: success
        });
    },
    fnSearchLocation: function (e) {
        var _this = this;
        var value = e.detail.value;
        var curCity = '';
        // 获取历史记录中的城市
        wx.getStorage({
            key: 'jkd_address',
            success: function (res) {
                // success
                console.log(res);
                curCity = res.data.curCity;
            }
        })
        if (value && curCity) {
            //请求百度接口，获取关键字地址    
            wx.request({
                url: 'http://api.map.baidu.com/place/v2/search?query=' + value + '&page_size=10&page_num=0&scope=1&region=' + curCity + '&output=json&ak=BrI4B8vgB7bG45xnLfcpGdG3',
                success: function (res) {
                    if (res.data.status == 0) {
                        _this.setData({
                            searchItem: res.data.results,
                            noLocation: false
                        })
                    } else {
                        _this.setData({
                            noItem: true,
                            noLocation: true
                        })
                    }
                },

            })
        } else {
            _this.setData({
                noLocation: true
            })
        }
    },
    fnUpdateLocation: function (e) {
        var lat = e.currentTarget.dataset.lat;
        var lng = e.currentTarget.dataset.lng;
        var source = this.data.source;

        // 通过百度api逆地址解析，获取当前位置的名称；
        wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?location=' + lat + ',' + lng + '&output=json&pois=1&ak=BrI4B8vgB7bG45xnLfcpGdG3',
            success: function (info) {
                if (info.data.status == 0) {
                    var curCity = info.data.result.addressComponent.city;
                    var curLocation;
                    if (info.data.result.pois.length > 0) {
                        curLocation = info.data.result.pois[0].name;
                    } else {
                        curLocation = info.data.result.formatted_address;
                    }

                    if (source == 'home') {

                        // 把百度逆解析到的地址、城市，存储在缓存中, 首页进入
                        wx.setStorage({
                            key: 'jkd_address',
                            data: {
                                curCity: curCity,
                                country: info.data.result.addressComponent.country,
                                direction: info.data.result.addressComponent.direction,
                                distance: info.data.result.addressComponent.distance,
                                district: info.data.result.addressComponent.district,
                                province: info.data.result.addressComponent.province,
                                street: info.data.result.addressComponent.street,
                                street_number: info.data.result.addressComponent.street_number,
                                curLocation: curLocation,
                                lat: info.data.result.location.lat,
                                lng: info.data.result.location.lng
                            }
                        })

                    } else if (source == 'add') {

                        // 新增地址进入
                        wx.setStorage({
                            key: 'newly_address',
                            data: {
                                curCity: curCity,
                                country: info.data.result.addressComponent.country,
                                direction: info.data.result.addressComponent.direction,
                                distance: info.data.result.addressComponent.distance,
                                district: info.data.result.addressComponent.district,
                                province: info.data.result.addressComponent.province,
                                street: info.data.result.addressComponent.street,
                                street_number: info.data.result.addressComponent.street_number,
                                curLocation: curLocation,
                                lat: info.data.result.location.lat,
                                lng: info.data.result.location.lng
                            },
                        })
                    }


                    wx.getStorage({
                        key: 'newly_address',
                        success: function (res) {
                            console.log(res);
                        }
                    })

                    // 定位成功，返回首页
                    wx.navigateBack();
                }

            },
            fail: function () {
                _this.setData({
                    locationtxt: '网络出了个小差，稍后再试哟'
                })
            }
        })
    },
    getAddressList: function () {
        this.setData({
            addressList: {
                shoppingAddressList: [
                    {
                        address: "北京飞科盛达电气控制开关厂",
                        consignee: "田",
                        id: 122957,
                        latitude: 39.82067,
                        longitude: 116.614203,
                        mobile: "15101540698",
                        street: "数字"
                    },
                    {
                        address: "沈阳金融大厦",
                        consignee: "田",
                        id: 122588,
                        latitude: 41.810231,
                        longitude: 123.438514,
                        mobile: "15101540698",
                        street: "金融大厦"
                    },
                    {
                        address: "数字工场",
                        consignee: "",
                        id: 122581,
                        latitude: 39.797017,
                        longitude: 116.569534,
                        mobile: "15101540698",
                        street: "8号楼"
                    },
                    {
                        address: "森林公园",
                        consignee: "",
                        id: 122553,
                        latitude: 41.812745,
                        longitude: 123.328741,
                        mobile: "15101540698",
                        street: "数字"
                    },
                    {
                        address: "京津高速公路",
                        consignee: "",
                        id: 121133,
                        latitude: 39.818682,
                        longitude: 116.608427,
                        mobile: "15101540698",
                        street: "数字工场"
                    }
                ]
            },
        })
    },

})