Page({
    data: {
        getCodeHtml: '获取验证码',
        yzOnOff: false,
        tel: '',
        countDownNum: 60,
        code: '',
        findBtn: false,
        setStep: true,
        pass: '',
        passAgain: '',
        passBtn: false,
        stepOnOff: true,
    },
    fnPhone: function (e) {
        let phone = e.detail.value;
        let code = this.data.code;
        this.setData({
            tel: phone
        })

        if (parseInt(code.length) == 6 && parseInt(phone.length) == 11) {
            this.setData({
                findBtn: true
            })
        } else {
            this.setData({
                findBtn: false
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
    fnCheckTel: function (e) {
        var that = this;

        // 验证手机号码是否合理; 发送验证码
        let getTel = this.data.tel;
        let telReg = /^(1[34578][0-9]{9})$/;
        if (!telReg.test(getTel)) {
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
    },
    fnCode: function (e) {
        let code = e.detail.value;
        let phone = this.data.tel;
        this.setData({
            code: code
        })

        if (parseInt(code.length) == 6 && parseInt(phone.length) == 11) {
            this.setData({
                findBtn: true
            })
        } else {
            this.setData({
                findBtn: false
            })
        }
    },
    fnStep1: function() {

        // 确认找回，请求接口，跳转到第二步
        this.setData({
            setStep: false,
            stepOnOff: false
        })   
    },
    fnPass: function(e) {
        let pass = e.detail.value;
        let passAgain = this.data.passAgain;
        this.setData({
            pass: pass
        })
        if (parseInt(pass.length) >= 6 && parseInt(passAgain.length) >= 6) {
            this.setData({
                passBtn: true
            })
        } else {
            this.setData({
                passBtn: false
            })
        }
    },
    fnPassAgain: function(e) {
        let passAgain = e.detail.value;
        let pass = this.data.pass;
        this.setData({
            passAgain: passAgain 
        })
        if ( parseInt(passAgain.length) >= 6 && parseInt(pass.length) >= 6) {
            this.setData({
                passBtn: true
            })
        } else {
            this.setData({
                passBtn: false
            })
        }
    }
})