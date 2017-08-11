
Page({
    data: {
        orderList: [],   // 订单列表
    },
    onLoad: function () {
        this.fnGetOrderList()
    },
    fnGetOrderList: function () {
        this.setData({
            orderList: [
                {
                    isShowState: 1,
                    orderProductList: [
                        {
                            pro_name: "澳大利亚天鹅庄一号西拉干红葡萄酒1500ml",
                            pro_price: 399,
                            pro_id: 529768,
                            buy_no: 1
                        }
                    ],
                    isShowUrgesButton: 0,
                    order_id: 584952,
                    image_url: "",
                    share_desc: "",
                    paid_amount: 399,
                    share_title: "",
                    pay_state: 0,
                    operType: 0,
                    redirect_url: "",
                    isShowCancelButton: 0,
                    shop_id: 42075,
                    isShowOperButton: 0,
                    stateColor: "#333333",
                    is_display: 0,
                    order_status: 8,
                    shop_name: "酒快到智能酒行（力宝店）",
                    pay_methods: 1,
                    operName: "",
                    stateName: "系统取消",
                    create_time: "2017-03-14 10:52:36",
                    isWap: 0,
                    order_sn: "170314105236030415",
                    mobile1: "",
                    order_type: 0,
                    mobile: "13784219228"
                },
                {
                    isShowState: 1,
                    isShowCancelButton: 0,
                    shop_id: 39563,
                    orderProductList: [
                        {
                            pro_name: "长城三星赤霞珠干红葡萄酒 750ml",
                            pro_price: 130,
                            pro_id: 396438,
                            buy_no: 1
                        },
                        {
                            pro_name: "美国32领域梅洛干红葡萄酒750m美国32领域梅洛干红葡萄酒750ml",
                            pro_price: 12,
                            pro_id: 534986,
                            buy_no: 1
                        },
                        {
                            pro_name: "46°洋河蓝色经典天之蓝 480ml",
                            pro_price: 518,
                            pro_id: 535698,
                            buy_no: 1
                        },
                    ],
                    isShowOperButton: 1,
                    stateColor: "#333333",
                    isShowUrgesButton: 0,
                    order_id: 584257,
                    order_status: 4,
                    shop_name: "聪聪小店",
                    pay_methods: 3,
                    stateName: "已收货",
                    operName: "去评价",
                    isWap: 0,
                    create_time: "2017-03-01 16:46:29",
                    order_sn: "170301164629447539",
                    mobile1: "",
                    paid_amount: 130,
                    operType: 2,
                    pay_state: 1,
                    mobile: "13681497381",
                    order_type: 0
                },
                {
                    isShowState: 1,
                    isShowCancelButton: 0,
                    shop_id: 39563,
                    orderProductList: [
                        {
                            pro_name: "38°百年牛栏山白酒（10年）500ml",
                            pro_price: 0.01,
                            pro_id: 529305,
                            buy_no: 1
                        }
                    ],
                    isShowOperButton: 0,
                    stateColor: "#333333",
                    isShowUrgesButton: 0,
                    order_id: 584253,
                    order_status: 7,
                    shop_name: "聪聪小店",
                    pay_methods: 1,
                    stateName: "已评价",
                    operName: "",
                    isWap: 0,
                    create_time: "2017-03-01 16:15:18",
                    order_sn: "170301161517950047",
                    mobile1: "",
                    paid_amount: 0.01,
                    operType: 0,
                    pay_state: 1,
                    mobile: "13681497381",
                    order_type: 0
                },
                {
                    isShowState: 1,
                    orderProductList: [
                        {
                            pro_name: "46°洋河蓝色经典天之蓝 480ml",
                            pro_price: 518,
                            pro_id: 535698,
                            buy_no: 1
                        }
                    ],
                    isShowUrgesButton: 0,
                    order_id: 584255,
                    image_url: "",
                    share_desc: "",
                    paid_amount: 518,
                    share_title: "",
                    pay_state: 0,
                    operType: 0,
                    redirect_url: "",
                    isShowCancelButton: 0,
                    shop_id: 39563,
                    isShowOperButton: 0,
                    stateColor: "#333333",
                    is_display: 0,
                    order_status: 3,
                    shop_name: "聪聪小店",
                    pay_methods: 1,
                    operName: "",
                    stateName: "已取消",
                    create_time: "2017-03-01 16:42:49",
                    isWap: 0,
                    order_sn: "170301164248569357",
                    mobile1: "",
                    order_type: 0,
                    mobile: "13681497381"
                },
                {
                    isShowState: 1,
                    isShowCancelButton: 0,
                    shop_id: 39563,
                    orderProductList: [
                        {
                            pro_name: "38°百年牛栏山白酒（10年）500ml",
                            pro_price: 0.01,
                            pro_id: 529305,
                            buy_no: 1
                        }
                    ],
                    isShowOperButton: 1,
                    stateColor: "#333333",
                    isShowUrgesButton: 0,
                    order_id: 584254,
                    order_status: 4,
                    shop_name: "聪聪小店",
                    pay_methods: 1,
                    stateName: "已收货",
                    operName: "去评价",
                    isWap: 0,
                    create_time: "2017-03-01 16:17:30",
                    order_sn: "170301161729980261",
                    mobile1: "",
                    paid_amount: 0.01,
                    operType: 2,
                    pay_state: 1,
                    mobile: "13681497381",
                    order_type: 0
                },
            ]
        })
    }
})