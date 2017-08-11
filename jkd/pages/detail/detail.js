
Page({
    data: {
        goodsInfo: {},  // 商品详情返回result商品信息
        starCalc: 1,    // 取整后的star
        rangeCalc: '0m',   // 计算后的距离range
        shopProList: {      // 当前店铺的其他商品
            goodsList: []
        },
        shopId: 0,      // 当前商品所属的店铺
        detailBtn: true,    // 商品详情，加入购物车按钮与 - + 按钮显示隐藏
        showCartList: false,    // 控制遮罩及购物车列表
        cartResult: {},     // 底部购物车返回数据
    },
    onLoad: function (e) {
        this.fnGoodsInfo();
        this.fnGetShopProList();
        this.fnGetCartResult();
    },
    fnGoodsInfo: function () {
        var that = this;
        this.setData({
            goodsInfo: {
                isBottlePrice: 1,
                is_onsale: 1,
                goods_desc: "暂无",
                bar_code: "5011013100132",
                iconUrl: "",
                bottlePrice: "0.00",
                state: 1,
                goods_name: "17°爱尔兰百利甜酒750ml（新版）",
                sub_title: "",
                act_title: "",
                stock: 2,
                min_price: -1,
                img_list: [
                    {
                        img: "http://img10.jiukuaidao.com/product/2015/1220/9f64e9eef13b4997a9b9c47184507b41j4.jpg"
                    },
                    {
                        img: "http://img10.jiukuaidao.com/product/2015/1220/5f409d65300c4daab0a63731cd9831f9j4.jpg"
                    },
                    {
                        img: "http://img10.jiukuaidao.com/product/2015/1220/d06768ed94c24a1292eabf2a68dd1768j4.jpg"
                    }
                ],
                goods_price: 88,
                originalPrice: "99.00",
                shopInfo: {
                    count: 10562,
                    shop_id: 42075,
                    minimum: 50,
                    sact_url: "",
                    sact_img: "",
                    shopTypeName: "体验店",
                    star: 4.81,
                    ranges: 5688,
                    sact_id: 0,
                    shop_type: 1,
                    sub_title: "",
                    shop_name: "酒快到智能酒行（力宝店）",
                    is_busy: 0,
                    free: 100,
                    is_close: 0,
                    mobile1: "",
                    delivery: 10,
                    is_business: 1,
                    mobile: "13784219228"
                },
                goods_id: 529930,
                goodsPrice: 88,
                pact_list: [],
                lastUnitPrice: "62.09",
                promotePrice: "88.00"
            }
        })
        this.setData({
            starCalc: Math.ceil(that.data.goodsInfo.shopInfo.star)
        })
        this.setData({
            shopId: that.data.goodsInfo.shopInfo.shop_id
        })
        // 处理后台返回距离，大于1000为km，否则就是m.
        var ranges = parseFloat(this.data.goodsInfo.shopInfo.ranges);
        if (ranges > parseFloat(1000)) {
            var iRan = (ranges / 1000).toFixed(2)
            this.setData({
                rangeCalc: iRan + 'km'
            })
        } else {
            this.setData({
                rangeCalc: ranges + 'm'
            })
        }
    },
    fnGetShopProList: function () {
        this.setData({
            shopProList: {
                goodsList: [
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 168,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 65,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 58,
                        sub_title: ""
                    },
                    {
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
                        stock: 61,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 18,
                        sub_title: ""
                    },
                    {
                        goods_id: 531310,
                        goods_name: "人头马CLUB特优香槟干邑350ml",
                        goods_price: 258,
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 23,
                        sub_title: ""
                    },
                    {
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
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 8,
                        sub_title: ""
                    },
                    {
                        goods_id: 530104,
                        goods_name: "53°茅台飞天500ml",
                        goods_price: 1238,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/5127b024d55542c6b05d40df0a8bc118j3.jpg",
                        min_price: -1,
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 24,
                        sub_title: ""
                    }
                ]
            },
        })
    },
    fnDetailJoin: function () {
        this.setData({
            detailBtn: false
        })
    },
    fnShowCartList: function () {
        // 点击购物车，遮罩及购物车列表显示隐藏
        var that = this;
        this.setData({
            showCartList: !that.data.showCartList
        })

    },
    fnCloseCartList: function () {
        this.setData({
            showCartList: false
        })
    },
    fnGetCartResult: function () {
        // 底部购物车返回数据
        this.setData({
            cartResult: {
                buyProductList: [
                    {
                        actType: 3,
                        bar_code: "9346610001008",
                        bottle_no: 1,
                        box_price: 0,
                        brand_id: 3999,
                        buy_no: 2,
                        category_id: 2,
                        fact_shop_price: 399,
                        goods_id: 529768,
                        goods_name: "澳大利亚天鹅庄一号西拉干红葡萄酒1500ml",
                        goods_price: 399,
                        is_gived: 0,
                        is_hyPirce: 1,
                        is_onsale: 1,
                        is_scm: 1,
                        sheath_no: 6,
                        sub_title: ""
                    },
                    {
                        actType: 1,
                        bar_code: "9345432015095",
                        bottle_no: 12,
                        box_price: 0,
                        brand_id: 4086,
                        buy_no: 1,
                        category_id: 2,
                        discount_price: 1,
                        fact_shop_price: 99,
                        goods_id: 530690,
                        goods_name: "澳大利亚丁戈树赤霞珠干红葡萄酒750ml",
                        goods_price: 98,
                        is_gived: 0,
                        is_hyPirce: 1,
                        is_onsale: 1,
                        is_scm: 1,
                        sheath_no: 1,
                        sub_title: ""
                    },
                    {
                        actType: 1,
                        bar_code: "675829400036",
                        bottle_no: 1,
                        box_price: 0,
                        brand_id: 3935,
                        buy_no: 1,
                        category_id: 2,
                        discount_price: 34,
                        fact_shop_price: 199,
                        goods_id: 530571,
                        goods_name: "美国32领域梅洛干红葡萄酒750ml",
                        goods_price: 125,
                        is_gived: 0,
                        is_hyPirce: 1,
                        is_onsale: 1,
                        is_scm: 1,
                        sheath_no: 12,
                        sub_title: ""
                    },
                    {
                        actType: 1,
                        bar_code: "6906785022036",
                        bottle_no: 12,
                        box_price: 0,
                        brand_id: 3902,
                        buy_no: 2,
                        category_id: 1,
                        discount_price: 10,
                        fact_shop_price: 68,
                        goods_id: 531122,
                        goods_name: "43°红星蓝界500ml",
                        goods_price: 58,
                        is_gived: 0,
                        is_hyPirce: 1,
                        is_onsale: 1,
                        is_scm: 1,
                        sheath_no: 1,
                        sub_title: ""
                    }
                ],
                create_time: "2017-03-16 18:00:06",
                groupInfo: {},
                productNum: 0,
                shoppingCartShop: {
                    business_hours_from: "10:00",
                    business_hours_to: "20:30",
                    city: 168,
                    delivery: 10,
                    district: 187,
                    free: 100,
                    is_business: 1,
                    is_card_pay: 0,
                    is_close: 0,
                    is_coupon: 1,
                    is_invoice: 1,
                    is_online_pay: 1,
                    latitude: 39.810578,
                    longitude: 116.508145,
                    minimum: 50,
                    province: 37,
                    shop_id: 42075,
                    shop_mobile: "13784219228",
                    shop_mobile1: "",
                    shop_name: "酒快到智能酒行（力宝店）",
                    state: 1
                },
                totalPrice: 1137
            }
        })
    },
}) 