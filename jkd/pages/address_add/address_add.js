Page({
    data: {
        addressList: {},
        addValue: '',
        houseValue: '',
        phoneValue: '',
        contactValue: '',
    },
    onShow: function () {
        this.fnGetAdd();
    },
    fnGetAdd: function () {
        var that = this;
        wx.getStorage({
            key: 'newly_address',
            success: function (res) {
                // success
                that.setData({
                    addValue: res.data.curLocation
                })
            },
        })
    },
    fnHouseValue: function (e) {
        this.setData({
            houseValue: e.detail.value
        })
    },
    fnPhoneValue: function (e) {
        this.setData({
            phoneValue: e.detail.value
        })
    },
    fnContactValue: function (e) {
        this.setData({
            contactValue: e.detail.value
        })
    },
    fnNewlyAdd: function () {
        var addValue = this.data.addValue;
        var houseValue = this.data.houseValue;
        var phoneValue = this.data.phoneValue;
        var contactValue = this.data.contactValue;
        var telReg = /^(1[34578][0-9]{9})$/;

        if (!addValue) {
            wx.showToast({
                title: '请选择送货地址',
                duration: 2000
            })
        } else if (!houseValue) {
            wx.showToast({
                title: '门牌号不能为空哟',
                duration: 2000
            })
        } else if (!phoneValue) {
            wx.showToast({
                title: '手机号不能为空哟',
                duration: 2000
            })
        } else if (!telReg.test(phoneValue)) {
            wx.showToast({
                title: '手机号不正确',
                duration: 2000
            })
        } else if (!contactValue) {
            wx.showToast({
                title: '请输入联系人哦',
                duration: 2000
            })
        } else {
            // 满足条件，保存地址
            
        }
    }
})