// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo:false,
        nickname:null,
        avatarBase64:null,
    },

    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    },

    bindViewTap() {
        wx.navigateTo({
          url: '/pages/chooseAvatar/chooseAvatar'
        })
    },

    base64ToSrc:function(base64){
        const that = this;
        var fsm= vxwx.getFileSystemManager();
        fsm.writeFile()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // wx.getStorage({
        //     key: 'userInfo',
        //     success (res) {
                
        //         if((res.data.avatarBase64 != null)){
        //             this.setData({
        //                 nickname:res.data.nickname,
        //                 avatarBase64:"data:image/jpg;base64,"+res.data.avatarBase64,
        //                 hasUserInfo:true,
        //             });
        //             console.log(this.data)
        //         }
                
        //     }
        // })
        try {
            var res = wx.getStorageSync('userInfo');
            if (res) {
                console.log("缓存里面拉数据");
                console.log(res)
                //avatarBase64 = "data:image/png;base64," +res.avatarBase64.replace(/[\r\n]/g, ''),
                this.setData({
                    nickname:res.nickname,
                    avatarBase64:res.avatarBase64.replace(/[\r\n]/g, ''),
                    hasUserInfo:true,
                });
                console.log("缓存里面拉数据");
            }
          } catch (e) {
            // Do something when catch error
          };
        this.setData({
            icon: base64.icon20,
            slideButtons: [
                {
                    text: '普通',
                    src: require('../../images/book.svg').default // icon的路径
                },
                {
                    text: '普通',
                    extClass: 'test',
                    src: require('./icon_star.svg').default // icon的路径
                },
                {
                    type: 'warn',
                    text: '警示',
                    extClass: 'test',
                    src: require('./icon_del.svg').default // icon的路径
                }
            ]
        });
        

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