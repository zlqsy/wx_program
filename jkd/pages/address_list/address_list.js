Page({
    data: {
        addressList: {}
    },
    onLoad: function () {
        this.getAddressList()
    },
    getAddressList: function () {
        this.setData({
            addressList: {
                shoppingAddressList: [
                    {
                        address: "北京飞科盛达电气控制开关厂",
                        consignee: "田",
                        id: 122957,
                        latitude: 39.82067,
                        longitude: 116.614203,
                        mobile: "15101540698",
                        street: "数字"
                    },
                    {
                        address: "沈阳金融大厦",
                        consignee: "田",
                        id: 122588,
                        latitude: 41.810231,
                        longitude: 123.438514,
                        mobile: "15101540698",
                        street: "金融大厦"
                    },
                    {
                        address: "数字工场",
                        consignee: "",
                        id: 122581,
                        latitude: 39.797017,
                        longitude: 116.569534,
                        mobile: "15101540698",
                        street: "8号楼"
                    },
                    {
                        address: "森林公园",
                        consignee: "",
                        id: 122553,
                        latitude: 41.812745,
                        longitude: 123.328741,
                        mobile: "15101540698",
                        street: "数字"
                    },
                    {
                        address: "京津高速公路",
                        consignee: "",
                        id: 121133,
                        latitude: 39.818682,
                        longitude: 116.608427,
                        mobile: "15101540698",
                        street: "数字工场"
                    }
                ]
            },
        })
    }
})