Page({
    data: {

    },
    fnTel: function() {
        wx.makePhoneCall({
            phoneNumber: '400-616-9999'
        })
    }
})