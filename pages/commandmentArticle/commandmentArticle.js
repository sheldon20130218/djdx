// pages/commandmentArticle/commandmentArticle.js
const app =getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [],
        activeTab: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {      
        const titles = ['初真十戒', '中级三百戒', '天仙大戒']
        const tabs = [
            {title:'初真十戒',rank:app.globalData.erc},
            {title:'中级三百戒',rank:app.globalData.mrc},
            {title:'天仙大戒',rank:app.globalData.hrc}] 
                
        this.setData({
            tabs:tabs,
        })
    },

    onTabCLick(e) {
        const index = e.detail.index
        this.setData({activeTab: index})
    },

    onChange(e) {
        const index = e.detail.index
        this.setData({activeTab: index})
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
        return {
            title: 'tabs',
            path: '/pages/commandmentArticle/commandmentArticle'
          }
    }
})