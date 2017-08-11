Page({
    data: {
        shopInfo: {},   // 店铺基本信息
        distanceCalc: '0m',
        commentInfoList: [],    // 店铺评论
        commentCount: 0,    // 店铺评论总数
        scrollHeight: 0,
        scrollTop: 0,
    },
    onLoad: function () {
        this.fnGetShopInfo();
        this.fnGetCommentInfo();
        this.fnGetScrollHeight();
    },
    fnGetShopInfo: function () {
        this.setData({
            shopInfo: {
                is_online_pay: 1,
                minimum: 50,
                is_card_pay: 0,
                is_compensation: 0,
                sub_title: "",
                distance: 5690,
                free: 100,
                is_invoice: 1,
                longitude: 116.508145,
                act_list: [],
                comment_count: 37,
                act_image: "",
                shop_id: 42075,
                mimage: "http://img10.jiukuaidao.com/product/2016/0131/b9c094bbe609437097b7ed3b587799caj.jpg",
                star: 4.8,
                image: "http://img10.jiukuaidao.com/product/2016/0131/b9c094bbe609437097b7ed3b587799caj.jpg",
                is_coupon: 1,
                business_hours_from: "10:00",
                shop_name: "酒快到智能酒行（力宝店）",
                is_busy: 0,
                address: "大兴区荣华中路（华联生活超市西南门）",
                business_hours_to: "20:30",
                mobile1: "",
                latitude: 39.810578,
                delivery: 10,
                is_business: 1,
                mobile: "13784219228"
            },
        })
        var disCalc = parseFloat(this.data.shopInfo.distance);
        var calc = '';
        if (disCalc > 1000) {
            calc = disCalc / 1000 + 'km';
        } else {
            calc = disCalc + 'm';
        }
        this.setData({
            distanceCalc: calc
        })
    },
    fnTel: function () {
        wx.makePhoneCall({
            phoneNumber: '400-616-9999'
        })
    },
    fnGetCommentInfo: function () {
        this.setData({
            commentCount: 20,
            commentInfoList: [
                {
                    content: "本次订货纯属速度测试，想看看下单到收货到底需要多久，以后在餐厅里吃饭能否好用。实际测试用了一个小时，有点长，服务态度很好，努力提速吧！",
                    comment_id: 192256,
                    user_name: "13****65",
                    create_time: "2017-03-14",
                    star: 3,
                    user_id: 380556
                },
                {
                    content: "",
                    comment_id: 192228,
                    user_name: "13****64",
                    create_time: "2016-12-17",
                    star: 5,
                    user_id: 374568
                },
                {
                    content: "非常好",
                    comment_id: 192199,
                    user_name: "15****07",
                    create_time: "2016-11-04",
                    star: 5,
                    user_id: 377196
                },
                {
                    content: "卖家信息不全，电话关机打不通，酒送到付款之后发现少一瓶啤酒，晕+_+",
                    comment_id: 192170,
                    user_name: "18****10",
                    create_time: "2016-09-04",
                    star: 1,
                    user_id: 376582
                },
                {
                    content: "速度快",
                    comment_id: 192111,
                    user_name: "17****84",
                    create_time: "2016-06-16",
                    star: 5,
                    user_id: 375196
                },
                {
                    content: "特别好！",
                    comment_id: 192093,
                    user_name: "18****97",
                    create_time: "2016-05-27",
                    star: 5,
                    user_id: 374810
                },
                {
                    content: "",
                    comment_id: 192089,
                    user_name: "13****64",
                    create_time: "2016-05-16",
                    star: 5,
                    user_id: 374568
                },
                {
                    content: "",
                    comment_id: 192079,
                    user_name: "18****29",
                    create_time: "2016-05-12",
                    star: 5,
                    user_id: 374481
                },
                {
                    content: "不错，不错，不错",
                    comment_id: 192055,
                    user_name: "15****91",
                    create_time: "2016-05-02",
                    star: 5,
                    user_id: 373906
                },
                {
                    content: "",
                    comment_id: 192040,
                    user_name: "15****96",
                    create_time: "2016-04-09",
                    star: 5,
                    user_id: 373750
                },
            ]
        })
    },
    fnGetScrollHeight: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    scrollHeight: res.windowHeight
                });
            }
        });
    },
    fnScroll: function (event) {
        this.setData({
            scrollTop: event.detail.scrollTop
        })
    },
    fnGetNextPage: function () {

        var rawList = this.data.commentInfoList;
        var nextPageArr = [{
            content: "好好，不错方便",
            comment_id: 192029,
            user_name: "13****97",
            create_time: "2016-03-25",
            star: 5,
            user_id: 373412
        },
        {
            content: "10分钟就送过来了，不错！",
            comment_id: 192027,
            user_name: "13****07",
            create_time: "2016-03-23",
            star: 5,
            user_id: 7369
        },
        {
            content: "极致 口碑 速度 好很好非常好",
            comment_id: 192023,
            user_name: "15****56",
            create_time: "2016-03-11",
            star: 5,
            user_id: 228832
        }, 
        {
            content: "太棒了～",
            comment_id: 192021,
            user_name: "13****07",
            create_time: "2016-03-05",
            star: 5,
            user_id: 7369
        },
        {
            content: "酒还没喝。比酒仙网贵。商品不全。",
            comment_id: 191982,
            user_name: "13****67",
            create_time: "2016-02-21",
            star: 5,
            user_id: 372636
        },
        {
            content: "速度快，比酒仙网贵。",
            comment_id: 191981,
            user_name: "13****67",
            create_time: "2016-02-21",
            star: 4,
            user_id: 372636
        }];

        if (this.data.commentInfoList.length <= this.data.commentCount) {
            this.setData({
                commentInfoList: this.data.commentInfoList.concat(nextPageArr)
            })
        }
        console.log(this.data.commentInfoList.length);
    }

})
