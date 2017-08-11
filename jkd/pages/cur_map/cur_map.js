Page({
    data: {
        scrollHeight: 0,
        shopName: '',
        address: '',
        lat: '',
        lng: '',
        markers: [{
            iconPath: "../../images/icon-address.png",
            id: 0,
            latitude: 39.810578,
            longitude: 116.508145,
            width: 30,
            height: 30
        }],
    },
    onLoad: function (options) {
        console.log(options)
        this.fnGetScrollHeight();
        this.setData({
            markers: [
                {
                    iconPath: "../../images/icon-address.png",
                    id: 0,
                    latitude: options.lat,
                    longitude: options.lng,
                    width: 30,
                    height: 30
                }
            ],
            lat: options.lat,
            lng: options.lng,
            shopName: options.shop_name,
            address: options.address
        })
    },
    fnMarkertap(e) {
        var that = this;
        wx.openLocation({
            latitude: parseFloat(that.data.lat),
            longitude: parseFloat(that.data.lng),
            name: that.data.shopName,
            address: that.data.address
        })
        console.log(that.data.lat)
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
})