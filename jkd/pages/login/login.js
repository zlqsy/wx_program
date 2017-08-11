
Page({
    data: {
        loginCur: 0,
        loginOnOff: true,
        yzOnOff: false,
        tel: '',
        getCodeHtml: '获取验证码',
        countDownNum: 60,
        countDownOff: false,
        loginBtn: false,
        code: '',
        phone: '',
        password: '',
        passBtn: false,
    },
    fnLoginTab1: function () {
        this.setData({
            loginCur: 0,
            loginOnOff: true,
        })
    },
    fnLoginTab2: function () {
        this.setData({
            loginCur: 1,
            loginOnOff: false,
        })
    },
    fnOnOffButton: function (e) {

        // 输入完手机号11位，获取验证码按钮开启；
        var telLength = e.detail.value.length;
        let telVal = e.detail.value;
        this.setData({
            tel: telVal
        })

        if ( parseInt(this.data.code.length) == 6 && parseInt(telLength) == 11) {
            this.setData({
                yzOnOff: true,
                loginBtn: true
            })
        } else if (parseInt(telLength) == 11) {
            this.setData({
                yzOnOff: true,
            })
        } else {
            this.setData({
                yzOnOff: false,
                loginBtn: false
            })
        }

        // 输入手机号与短信验证码，开启登录按钮；

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
    fnOnOffLogin: function (e) {

        // 监听短信验证码，启动登录按钮
        let loginLength = e.detail.value.length;
        let codeVal = e.detail.value
        this.setData({
            code: codeVal
        })
        if (parseInt(this.data.tel.length) == 11 && parseInt(loginLength) == 6) {
            this.setData({
                loginBtn: true,
            })
        } else {
            this.setData({
                loginBtn: false,
            })
        }
    },
    fnOnOffPass: function (e) {

        // 监听密码登录 手机号与密码都符合要求，开启登录；
        let phone = e.detail.value;
        let phoneLength = phone.length;
        let password = this.data.password;

        this.setData({
            phone: phone
        })

        if (parseInt(phoneLength) == 11 && password != '') {
            this.setData({
                passBtn: true
            })
        } else {
            this.setData({
                passBtn: false
            })
        }
    },
    fnOnOffPassBtn: function(e) {

        // 监听密码不为空的时候，且手机号为11为情况，开启登录；
        let password = e.detail.value;
        let phone = this.data.phone;
        this.setData({
            password: password
        })

        if (password != '' && parseInt(phone.length) == 11 ) {
             this.setData({
                passBtn: true
            })
        } else {
            this.setData({
                passBtn: false
            })
        }
    },
    fnPassLogin: function () {
        let phone = this.data.phone;
        let password = this.data.password;
        let telReg = /^(1[34578][0-9]{9})$/;

        if (!telReg.test(phone)) {
            wx.showModal({
                title: '',
                content: '手机号码输入不对哟，请重新输入',
                showCancel: false,
            })
        } 
    }
})