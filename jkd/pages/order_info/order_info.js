
Page({
    data: {
        orderInfo: {},    // 订单详情
        starNum: 5,
        curStar: 5,
    },
    onLoad: function () {
        this.getOrderInfo();
    },
    fnGetStar: function (e) {
        let curStar = e.target.dataset.index
        console.log(curStar)
        this.setData({
            curStar: curStar
        })
    },
    getOrderInfo: function () {
        this.setData({
            orderInfo: {
                activityList: [],
                buyProductList: [
                    {
                        actType: 0,
                        bar_code: "6901009903955",
                        buy_no: 1,
                        category_id: 0,
                        goods_id: 396438,
                        goods_name: "长城三星赤霞珠干红葡萄酒 750ml",
                        goods_price: 130,
                        is_gived: 0,
                        is_onsale: 0,
                        sub_title: ""
                    }
                ],
                discount_price: 0,
                id: 584257,
                invoice_top: "",
                is_first_order: 0,
                lgs_price: 0,
                orderCommentMap: {},
                orderLogList: [
                    {
                        create_time: "2017-03-01 16:46:29",
                        log_desc: "",
                        log_info: "下单成功",
                        ord_order_id: 584257,
                        status: 0,
                        user_id: 189826
                    },
                    {
                        create_time: "2017-03-01 16:46:44",
                        log_desc: "",
                        log_info: "商家已接单",
                        ord_order_id: 584257,
                        remark_id: 0,
                        status: 1,
                        user_id: 83,
                        user_type: 3
                    },
                    {
                        create_time: "2017-03-02 17:00:00",
                        log_desc: "系统自动签收~",
                        log_info: "已签收",
                        ord_order_id: 584257,
                        status: 4,
                        user_id: 189826
                    }
                ],
                order_id: 584257,
                order_remark: "",
                order_sn: "170301164629447539",
                order_type: 0,
                paid_amount: 130,
                pay_channel: 0,
                pay_methods: 3,
                pay_price: 130,
                pay_state: 1,
                shop_id: 39563,
                shoppingAddress: {
                    address: "京津高速公路",
                    consignee: "",
                    id: 576051,
                    latitude: 39.818682,
                    longitude: 116.608427,
                    mobile: "15101540698",
                    street: "数字工场"
                },
                shoppingCartShop: {
                    business_hours_from: "00:01",
                    business_hours_to: "23:58",
                    city: 1,
                    delivery: 0,
                    district: 2,
                    free: 50.01,
                    is_business: 1,
                    is_card_pay: 1,
                    is_close: 0,
                    is_coupon: 1,
                    is_invoice: 0,
                    is_online_pay: 1,
                    latitude: 39.816222,
                    longitude: 116.605777,
                    minimum: 0,
                    province: 3368,
                    shop_id: 39563,
                    shop_mobile: "13681497381",
                    shop_mobile1: "",
                    shop_name: "聪聪小店",
                    state: 1
                },
                status: 4,
                total_price: 130
            }
        })
    }
})