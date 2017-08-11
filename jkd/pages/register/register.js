Page({
    data: {
        registerBtn: false,
        regPhone: '',
        regCode: '',
        regPass: '',
        yzOnOff: 　false,
        getCodeHtml: '获取验证码',
        countDownNum: 60,
    },
    fnPhone: function (e) {
        let phone = e.detail.value;
        let regCode = this.data.regCode;
        let regPass = this.data.regPass;

        this.setData({
            regPhone: phone
        })
        if (parseInt(regCode.length) == 6 && parseInt(regPass.length) >= 6 && parseInt(phone.length) == 11 ) {
            this.setData({
                registerBtn: true
            })
        } else {
            this.setData({
                registerBtn: false
            })
        }
        
        if (parseInt(phone.length) == 11) {
            this.setData({
                yzOnOff: true
            })
        } else {
            this.setData({
                yzOnOff: false
            })
        }
    },
    fnCode: function (e) {
        let code = e.detail.value;
        let regPhone = this.data.regPhone;
        let regPass = this.data.regPass;

        this.setData({
            regCode: code
        })

        if (parseInt(regPhone.length) == 11 && parseInt(code.length) == 6 && parseInt(regPass.length) >= 6) {
            this.setData({
                registerBtn: true
            })
        } else {
            this.setData({
                registerBtn: false
            })
        }
    },
    fnPass: function (e) {
        let pass = e.detail.value;
        let regCode = this.data.regCode;
        let regPhone = this.data.regPhone;

        this.setData({
            regPass: pass
        })

        if (parseInt(pass.length) >= 6 && parseInt(regCode.length) == 6 && parseInt(regPhone.length) == 11) {
            this.setData({
                registerBtn: true
            })
        } else {
            this.setData({
                registerBtn: false
            })
        }
    },
    fnCodeCheck: function () {
        var that = this;

        // 满足要求，发送验证码，倒计时
        let telReg = /^(1[34578][0-9]{9})$/;
        let regPhone = this.data.regPhone;

        if (!telReg.test(regPhone)) {
            wx.showModal({
                title: '',
                content: '手机号输入不对哟，请重新输入',
                showCancel: false,
            })
        } else {
            let countDownNum = this.data.countDownNum;
            var iTimer = null;

            countDownNum--;
            this.setData({
                countDownOff: true,
                yzOnOff: false,
                getCodeHtml: countDownNum + '秒'
            })

            iTimer = setInterval(function () {
                countDownNum--;
                that.setData({
                    countDownOff: true,
                    yzOnOff: false,
                    getCodeHtml: countDownNum + '秒'
                })

                if (countDownNum < 1) {
                    clearTimeout(iTimer);
                    that.setData({
                        countDownOff: false,
                        countDownNum: 60,
                        yzOnOff: true,
                        getCodeHtml: '获取验证码'
                    })
                }
            }, 1000);

        }

    }
})