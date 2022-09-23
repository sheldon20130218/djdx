// pages/highRank/highRank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        desc:"",
        date:"壬寅年 戊申月 甲辰日",
        checkboxItems: [
            {name: '一者智慧远身行法，不可称量。', value: '1', checked: false},
            {name: '二者慈悲远身行法，不可称量。', value: '2'},
            {name: '三者含忍远身行法，不可称量。', value: '3'},
            {name: '四者行功远身行法，不可称量。 ', value: '4'},
            {name: '五者修心远身行法，不可称量。', value: '5'},
            {name: '六者善业远身行法，不可称量。', value: '6'},
            {name: '七者精进远身行法，不可称量。', value: '7'},
            {name: '八者饰身远身行法，不可称量。', value: '8'},
            {name: '九者遣情远身行法，不可称量。', value: '9'},
            {name: '十者普心远身行法，不可称量。', value: '10'}
        ],
    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            [`formData.radio`]: e.detail.value
        });
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems,
            [`formData.checkbox`]: e.detail.value
        });
    },

    submitForm(event){
        if(this.data.formData == undefined){
            return;
        }
        console.log(this.data.formData.checkbox);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})