
Page({
    data: {
        cateNav: {},    // 返回店铺信息及子导航分类接口
        cateNavCur: 0,  // 分类标红
        rangeCalc: '0m',   // 计算后的距离range  
        shopList: {},   // 店铺详情列表
        showCartList: false,    // 控制遮罩及购物车列表
        cartResult: {},     // 底部购物车返回数据
    },
    onLoad: function () {
        this.fnGetSubNav()
        this.fnGetShopList()
        this.fnGetCartResult()
    },
    fnGetSubNav: function () {
        this.setData({
            cateNav: {
                shopInfo: {
                    count: 10691,
                    shop_id: 42075,
                    minimum: 50,
                    sact_url: "",
                    sact_img: "",
                    star: 4.81,
                    ranges: 10,
                    sact_id: 0,
                    sub_title: "",
                    shop_name: "酒快到智能酒行（力宝店）",
                    is_busy: 0,
                    free: 100,
                    is_close: 0,
                    longitude: 116.508145,
                    mobile1: "",
                    latitude: 39.810578,
                    delivery: 10,
                    is_business: 1,
                    mobile: "13784219228"
                },
                list: [
                    {
                        goods_type_name: "热销",
                        category_id: 0
                    },
                    {
                        goods_type_name: "白酒",
                        category_id: 1
                    },
                    {
                        goods_type_name: "葡萄酒",
                        category_id: 2
                    },
                    {
                        goods_type_name: "洋酒",
                        category_id: 6
                    },
                    {
                        goods_type_name: "啤酒",
                        category_id: 5
                    },
                    {
                        goods_type_name: "黄酒",
                        category_id: 4
                    },
                    {
                        goods_type_name: "其它酒",
                        category_id: 13
                    },
                    {
                        goods_type_name: "水/饮料",
                        category_id: 14
                    },
                    {
                        goods_type_name: "其它",
                        category_id: 17
                    },
                    {
                        goods_type_name: "酒具",
                        category_id: 19
                    }
                ]
            },
        })

        // 处理后台返回距离，大于1000为km，否则就是m.
        var ranges = parseFloat(this.data.cateNav.shopInfo.ranges);
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
    fnGetCateList: function (e) {
        const cateId = e.currentTarget.dataset.categoryId;
        this.setData({
            cateNavCur: cateId
        })
    },
    fnGetShopList: function () {
        this.setData({
            shopList: {
                goodsList: [
                    {
                        barCode: "9346610001008",
                        categoryId: 2,
                        goods_id: 529768,
                        goods_name: "澳大利亚天鹅庄一号西拉干红葡萄酒1500ml",
                        goods_price: 399,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0123/435255b2c6a8469aa84ee20cca55e5abj3.jpg",
                        isScm: 1,
                        min_price: -1,
                        promotePrice: 399,
                        retailPrice: 419,
                        shopTypeName: "体验店",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 5,
                        sub_title: ""
                    },
                    {
                        barCode: "9310297010905",
                        categoryId: 2,
                        goods_id: 529771,
                        goods_name: "澳大利亚奔富寇兰山赤霞珠西拉红葡萄酒750ml",
                        goods_price: 99,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0217/3e7bf176a57247aeb59c8101cffd882ej3.jpg",
                        isScm: 1,
                        min_price: -1,
                        promotePrice: 99,
                        retailPrice: 109,
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0,
                        sub_title: ""
                    },
                    {
                        barCode: "5011013100132",
                        categoryId: 6,
                        goods_id: 529930,
                        goods_name: "17°爱尔兰百利甜酒750ml（新版）",
                        goods_price: 88,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/9f64e9eef13b4997a9b9c47184507b41j3.jpg",
                        isScm: 1,
                        min_price: -1,
                        promotePrice: 88,
                        retailPrice: 99,
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 0,
                        sub_title: ""
                    },
                    {
                        barCode: "5000267024202",
                        categoryId: 6,
                        goods_id: 529939,
                        goods_name: "40°英国尊尼获加黑方威士忌700ml",
                        goods_price: 189,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/e3a80317d093405facc67b85a8ce9a44j3.jpg",
                        isScm: 1,
                        min_price: -1,
                        promotePrice: 189,
                        retailPrice: 199,
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 8,
                        sub_title: ""
                    },
                    {
                        barCode: "675829400036",
                        categoryId: 2,
                        goods_id: 530571,
                        goods_name: "美国32领域梅洛干红葡萄酒750ml",
                        goods_price: 199,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2015/1220/80b037079bcb434e84fb63bbf8d830b1j3.jpg",
                        iconUrl: "http://img10.jiukuaidao.comhttp://img10.jiukuaidao.com/pic/2015/1207/295d7f66dba24e9aa1dc300ef050978dj2.png",
                        isScm: 1,
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
                        promotePrice: 199,
                        retailPrice: 269,
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 65,
                        sub_title: ""
                    },
                    {
                        barCode: "9311043602979",
                        categoryId: 2,
                        goods_id: 532478,
                        goods_name: "澳大利亚威廉·夏迪2014西拉干红葡萄酒750ml",
                        goods_price: 269,
                        goods_thumb: "http://img10.jiukuaidao.com/product/2016/0812/b6a6178e454f4f689d9cba69edbc95b3j3.png",
                        isScm: 1,
                        min_price: -1,
                        promotePrice: 269,
                        retailPrice: 299,
                        shopTypeName: "",
                        shop_id: 42075,
                        shop_type: 1,
                        stock: 1,
                        sub_title: ""
                    }
                ],
                categoryId: 0,
                pageSize: 6,
                proCount: 6
            },
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