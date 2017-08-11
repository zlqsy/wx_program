Page({
    data: {
        shopOnOff: false,
        hotOnOff: true,
        hotResult: {},
        searchVal: '',
        shopList: {},
    },
    onLoad: function () {
        this.fnGetHot();
        this.fnGetShop();
    },
    fnGetHot: function () {
        this.setData({
            hotResult: {
                "total": 16,
                "list": [{
                    "lbs_data": "牛栏山",
                    "lbs_id": 1
                }, {
                    "lbs_data": "五粮液",
                    "lbs_id": 2
                }, {
                    "lbs_data": "红星",
                    "lbs_id": 4
                }, {
                    "lbs_data": "泸州老窖",
                    "lbs_id": 10
                }, {
                    "lbs_data": "拉菲",
                    "lbs_id": 11
                }, {
                    "lbs_data": "剑南春",
                    "lbs_id": 12
                }, {
                    "lbs_data": "水井坊",
                    "lbs_id": 13
                }, {
                    "lbs_data": "茅台",
                    "lbs_id": 14
                }, {
                    "lbs_data": "洋河",
                    "lbs_id": 15
                }, {
                    "lbs_data": "名庄",
                    "lbs_id": 16
                }, {
                    "lbs_data": "汾酒",
                    "lbs_id": 17
                }, {
                    "lbs_data": "奔富",
                    "lbs_id": 18
                }, {
                    "lbs_data": "人头马",
                    "lbs_id": 19
                }, {
                    "lbs_data": "轩尼诗",
                    "lbs_id": 20
                }, {
                    "lbs_data": "酒鬼酒",
                    "lbs_id": 21
                }, {
                    "lbs_data": "丁戈树",
                    "lbs_id": 32
                }]
            },
        })
    },
    fnSearchVal: function (e) {
        this.setData({
            searchVal: e.detail.value
        })
    },
    fnSearch: function () {
        var searchVal = this.data.searchVal;

        if (!searchVal) {
            wx.showModal({
                content: '搜索条件不能为空哟~',
                showCancel: false,
            })
        } else {
            this.setData({
                hotOnOff: false,
                shopOnOff: true
            })
        }
    },
    fnHotSearch: function (event) {
        var hotWord = event.currentTarget.dataset.hot
        this.setData({
            searchVal: hotWord
        })
        this.fnSearch();
    },
    fnGetShop: function () {
        this.setData({
            shopList: {
                total: 3,
                state: 0,
                list: [
                    {
                        is_business: 1,
                        is_busy: 0,
                        pro_count: 9,
                        pro_list: [
                            {
                                pro_name: "56°牛栏山二锅头白酒750ml（6瓶装）",
                                pro_price: 199,
                                pro_image: "http://img10.jiukuaidao.com/product/2016/0122/603e7c9fffa74a1cb9f78c1f522ad40dj2.jpg",
                                shopprice: 199,
                                pro_id: 529799,
                                category_id: "1",
                                sub_title: ""
                            },
                            {
                                pro_name: "52°清香百年牛栏山475ml",
                                pro_price: 55,
                                pro_image: "http://img10.jiukuaidao.com/product/2015/1220/1b2cf5705df4462b9cc5350ec0cfb862j2.jpg",
                                shopprice: 59,
                                pro_id: 529890,
                                category_id: "1",
                                sub_title: ""
                            },
                            {
                                pro_name: "36°百年牛栏山陈酿400ml",
                                pro_price: 109,
                                pro_image: "http://img10.jiukuaidao.com/product/2015/1220/af2b072913624a87a03481cf1a527935j2.jpg",
                                shopprice: 119,
                                pro_id: 529893,
                                category_id: "1",
                                sub_title: ""
                            }
                        ],
                        shop_distance: 5682,
                        shop_id: 42075,
                        shop_name: "酒快到智能酒行（力宝店）"
                    },
                    {
                        is_business: 1,
                        is_busy: 1,
                        pro_count: 1,
                        pro_list: [
                            {
                                pro_name: "百年牛栏山白酒（金喜牛）",
                                pro_price: 80,
                                pro_image: "http://img10.jiukuaidao.com/product/2015/0320/f16bf0d267654a129f093f467b7011ce2.jpg",
                                shopprice: 80,
                                pro_id: 389659,
                                category_id: "1",
                                sub_title: ""
                            }
                        ],
                        shop_distance: 502,
                        shop_id: 4398,
                        shop_name: "福霁源超市"
                    },
                    {
                        is_business: 1,
                        is_busy: 1,
                        pro_count: 7,
                        pro_list: [
                            {
                                pro_name: "36百年牛栏山陈酿400",
                                pro_price: 119,
                                pro_image: "http://img10.jiukuaidao.com/product/2016/1222/0ea801ef90b540aab9e803a64b87dcabj2.jpg",
                                shopprice: 119,
                                pro_id: 395690,
                                category_id: "1",
                                sub_title: ""
                            },
                            {
                                pro_name: "45牛栏山蓝花瓷二锅头500",
                                pro_price: 65,
                                pro_image: "http://img10.jiukuaidao.com/product/2015/1231/82040b1cd56c4703b7aa83185f71e71bj2.jpg",
                                shopprice: 65,
                                pro_id: 395693,
                                category_id: "1",
                                sub_title: ""
                            },
                            {
                                pro_name: "35牛栏山蓝色经典500",
                                pro_price: 98,
                                pro_image: "http://img10.jiukuaidao.com/product/2015/0407/653ad15870474133bdc8eacd3a3d97ad2.jpg",
                                shopprice: 98,
                                pro_id: 395696,
                                category_id: "1",
                                sub_title: ""
                            }
                        ],
                        shop_distance: 997,
                        shop_id: 18477,
                        shop_name: "金通超市"
                    }
                ]
            },
        })
    },
})