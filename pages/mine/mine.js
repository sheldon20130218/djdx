// pages/mine/mine.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nickname:null,
        avatarUrl:null,
    },

    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    },

    bindViewTap() {
        wx.navigateTo({
          url: '/pages/chooseAvatar/chooseAvatar'
        })
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
      this.setData({
        avatarUrl: app.globalData.userInfo?.avatarBase64 || app.globalData.defaultAvatarUrl,
        nickname: app.globalData.userInfo?.nickname || app.globalData.defaultNickname
      })
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

})