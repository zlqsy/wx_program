
Page({
    data: {
        cateCur: 0,
        cateTitle: ['分类', '商家'],
        shopResult: {},     //店铺列表返回的result数据
        cateNav: {},    // 分类导航
        cateNavCur: 0,  //分类标红
        ambitusGoodsItem: {},
    },
    onLoad: function () {
        this.fnGetShopList()
        this.fnGetAmbitusGoods()
    },
    fnChangeTab: function (event) {  //设置选项卡选中索引
        const edata = event.currentTarget.dataset;
        this.setData({
            cateCur: edata.index
        })
    },
    fnGetShopList: function () {
        this.setData({
            shopResult: {
                "total": 3,
                "list": [
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "10:00",
                        "business_hours_to": "20:30",
                        "delivery": 10,
                        "distance": 5686,
                        "free": 100,
                        "image": "http://img10.jiukuaidao.com/product/2016/0131/e72bc4cce06641a3a059db6d835a1bd0j.jpg",
                        "is_business": 1,
                        "is_busy": 0,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 1,
                        "is_online_pay": 1,
                        "latitude": 39.810578,
                        "longitude": 116.508145,
                        "minimum": 50,
                        "new_image": "",
                        "pro_count": 532,
                        "saleNum": 10013,
                        "shopTypeName": "体验店",
                        "shop_id": 42075,
                        "shop_name": "酒快到智能酒行（力宝店）",
                        "shop_type": 1,
                        "star": 4.9,
                        "sub_title": "",
                        "template_image": ""
                    },
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "01:01",
                        "business_hours_to": "23:02",
                        "delivery": 5,
                        "distance": 508,
                        "free": 50,
                        "image": "http://img10.jiukuaidao.com/shop/2015/0318/0ebf0b862fce486f9126d8e1137af4f6.png",
                        "is_business": 1,
                        "is_busy": 1,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 0,
                        "is_online_pay": 1,
                        "latitude": 39.79144,
                        "longitude": 116.56962,
                        "minimum": 0,
                        "new_image": "",
                        "pro_count": 145,
                        "saleNum": 4018,
                        "shopTypeName": "",
                        "shop_id": 4398,
                        "shop_name": "福霁源超市",
                        "shop_type": 0,
                        "star": 5,
                        "sub_title": "",
                        "template_image": ""
                    },
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "06:45",
                        "business_hours_to": "23:59",
                        "delivery": 5,
                        "distance": 992,
                        "free": 50,
                        "image": "http://img10.jiukuaidao.com/shop/2015/0318/5fb947be07d147ed89790bb468bd7109.png",
                        "is_business": 0,
                        "is_busy": 0,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 0,
                        "is_online_pay": 1,
                        "latitude": 39.804594,
                        "longitude": 116.572585,
                        "minimum": 0,
                        "new_image": "",
                        "pro_count": 388,
                        "saleNum": 34517,
                        "shopTypeName": "",
                        "shop_id": 18477,
                        "shop_name": "金通超市",
                        "shop_type": 0,
                        "star": 5,
                        "sub_title": "",
                        "template_image": ""
                    },
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "10:00",
                        "business_hours_to": "20:30",
                        "delivery": 10,
                        "distance": 5686,
                        "free": 100,
                        "image": "http://img10.jiukuaidao.com/product/2016/0131/e72bc4cce06641a3a059db6d835a1bd0j.jpg",
                        "is_business": 1,
                        "is_busy": 0,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 1,
                        "is_online_pay": 1,
                        "latitude": 39.810578,
                        "longitude": 116.508145,
                        "minimum": 50,
                        "new_image": "",
                        "pro_count": 532,
                        "saleNum": 10013,
                        "shopTypeName": "体验店",
                        "shop_id": 42075,
                        "shop_name": "酒快到智能酒行（力宝店）",
                        "shop_type": 1,
                        "star": 4.9,
                        "sub_title": "",
                        "template_image": ""
                    },
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "10:00",
                        "business_hours_to": "20:30",
                        "delivery": 10,
                        "distance": 5686,
                        "free": 100,
                        "image": "http://img10.jiukuaidao.com/product/2016/0131/e72bc4cce06641a3a059db6d835a1bd0j.jpg",
                        "is_business": 1,
                        "is_busy": 0,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 1,
                        "is_online_pay": 1,
                        "latitude": 39.810578,
                        "longitude": 116.508145,
                        "minimum": 50,
                        "new_image": "",
                        "pro_count": 532,
                        "saleNum": 10013,
                        "shopTypeName": "体验店",
                        "shop_id": 42075,
                        "shop_name": "酒快到智能酒行（力宝店）",
                        "shop_type": 1,
                        "star": 4.9,
                        "sub_title": "",
                        "template_image": ""
                    },
                    {
                        "act_image": "",
                        "act_list": [],
                        "business_hours_from": "06:45",
                        "business_hours_to": "23:59",
                        "delivery": 5,
                        "distance": 992,
                        "free": 50,
                        "image": "http://img10.jiukuaidao.com/shop/2015/0318/5fb947be07d147ed89790bb468bd7109.png",
                        "is_business": 0,
                        "is_busy": 0,
                        "is_card_pay": 0,
                        "is_compensation": 0,
                        "is_coupon": 1,
                        "is_invoice": 0,
                        "is_online_pay": 1,
                        "latitude": 39.804594,
                        "longitude": 116.572585,
                        "minimum": 0,
                        "new_image": "",
                        "pro_count": 388,
                        "saleNum": 34517,
                        "shopTypeName": "",
                        "shop_id": 18477,
                        "shop_name": "金通超市",
                        "shop_type": 0,
                        "star": 5,
                        "sub_title": "",
                        "template_image": ""
                    },
                ]
            }
        });
        this.setData({
            cateNav: {
                "list": [{
                    "category_id": 0,
                    "goods_type_name": "热销",
                    "labelList": []
                }, {
                    "goods_type_name": "白酒",
                    "category_id": 1
                }, {
                    "goods_type_name": "葡萄酒",
                    "category_id": 2
                }, {
                    "goods_type_name": "洋酒",
                    "category_id": 6
                }, {
                    "goods_type_name": "啤酒",
                    "category_id": 5
                }, {
                    "goods_type_name": "黄酒",
                    "category_id": 4
                }, {
                    "goods_type_name": "其它酒",
                    "category_id": 13
                }, {
                    "goods_type_name": "水/饮料",
                    "category_id": 14
                }, {
                    "goods_type_name": "其它",
                    "category_id": 17
                }, {
                    "goods_type_name": "酒具",
                    "category_id": 19
                }]
            }
        });
    },
    fnGetCateList: function (e) {
        const cateId = e.currentTarget.dataset.categoryId;
        this.setData({
            cateNavCur: cateId
        })
    },
    fnGetAmbitusGoods: function () {
        this.setData({
            ambitusGoodsItem: {
                goodsList: [
                    {
                        barCode: "9345432015095",
                        goods_id: 530690,
                        goods_name: "澳大利亚丁戈树赤霞珠干红葡萄酒750ml",
                        goods_price: 99,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0519/3fcfd21cffde4fcc9f0b3e878017fa1ej3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 98,
                        pact_list: [
                            {
                                act_content: "三八---丁戈树",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 98,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 168
                    },
                    {
                        barCode: "675829400036",
                        goods_id: 530571,
                        goods_name: "美国32领域梅洛干红葡萄酒750ml",
                        goods_price: 199,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/80b037079bcb434e84fb63bbf8d830b1j3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 125,
                        pact_list: [
                            {
                                act_content: "三八节---32领域",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 125,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 65
                    },
                    {
                        barCode: "6938173792566",
                        goods_id: 531511,
                        goods_name: "52°全兴（1963）500ml",
                        goods_price: 48,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0428/6dff74f78d2b4bfcba52abf5bb71c312j3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 39,
                        pact_list: [
                            {
                                act_content: "双庆--三人炫",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 39,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0
                    },
                    {
                        barCode: "6906785022036",
                        goods_id: 531122,
                        goods_name: "43°红星蓝界500ml",
                        goods_price: 68,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0628/83e30f3604f8413fb2f944bf569f8ddfj3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 58,
                        pact_list: [
                            {
                                act_content: "双庆--红星",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 58,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 58
                    },
                    {
                        barCode: "9346610000803",
                        goods_id: 530568,
                        goods_name: "天鹅庄家族精选西拉干红葡萄酒750ml",
                        goods_price: 168,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0428/12b689f974954efdbb18bc4e46c404efj3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 138,
                        pact_list: [
                            {
                                act_content: "三八---天鹅庄",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 138,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 61
                    },
                    {
                        barCode: "3352370015342",
                        goods_id: 530120,
                        goods_name: "法国伯瑞牌干型皇家香槟750ml",
                        goods_price: 289,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0226/542bf9799c37483ba89c20fc8691bb36j3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 266,
                        pact_list: [
                            {
                                act_content: "三八---伯瑞",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 266,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0
                    },
                    {
                        barCode: "9311043001857",
                        goods_id: 532480,
                        goods_name: "澳大利亚夏迪族徽2015赤霞珠干红葡萄酒750ml",
                        goods_price: 108,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0815/ac418f8d11e744e69db1553c690fdf75j3.png",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 88,
                        pact_list: [
                            {
                                act_content: "三八---夏迪",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 88,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 18
                    },
                    {
                        barCode: "3024480235124",
                        goods_id: 531310,
                        goods_name: "人头马CLUB特优香槟干邑350ml",
                        goods_price: 259,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0112/8cde46403f4b4924bc1c03303248d92dj3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 249,
                        pact_list: [
                            {
                                act_content: "三八---人头马",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 249,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 23
                    },
                    {
                        barCode: "6927322003622",
                        goods_id: 529892,
                        goods_name: "53°国台酱酒1000ml",
                        goods_price: 499,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/7a777af64943415c9b559cfc400ba036j3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        min_price: 399,
                        pact_list: [
                            {
                                act_content: "双庆--国台",
                                act_type: 8,
                                color: "#0099FF",
                                iconUrl: "http://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj.png",
                                min_price: 399,
                                title: "特价"
                            }
                        ],
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 8
                    }
                ]
            
            }
        })
    }
})