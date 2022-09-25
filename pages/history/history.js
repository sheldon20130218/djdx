// pages/history/history.js
const app = getApp()
const { formatDate } = require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    endDate: '',
    date: '',
    elementaryRank: [],
    middleRank: [],
    hightRank: [],
  },

  onDateChange({ detail: { value } }) {
    this.setData({
      date: value
    })
  },

  onCheckboxChange({ currentTarget: { id } }) {
    const preceptList = this.data[id]
    this.setData({
      [id]: preceptList
    })
  },

  fetchHistory(date) {
    const time = new Date(date).valueOf()
    wx.showLoading({
      title: '加载打卡数据中',
    })
    wx.request({
      url: `${app.globalData.baseUrl}/api/clockin/history`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: app.globalData.userInfo.token,
      },
      data: {
        time
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const { elementaryRank, middleRank, highRank, highRanktitle } = res.data
          this.setData({
            elementaryRank,
            middleRank,
            highRank,
            highRanktitle
          })
          wx.hideLoading()
        } else {
          wx.hideLoading({
            success: (res) => {
              wx.showLoading({
                title: '数据加载失败，请稍后重试',
                icons: 'error'
              })
            },
          })
        }
      },
      fail: (err) => {
        wx.hideLoading({
          success: (res) => {
            wx.showLoading({
              title: '数据加载失败，请稍后重试',
              icons: 'error'
            })
          },
        })
      },
      complete: () => {
        wx.stopPullDownRefresh()
      }
    })
  },

  watchDate(date) {
    this.fetchHistory(date)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    app.watch(this.data, 'date', (date) => this.watchDate(date))
    const date = formatDate(new Date())
    this.setData({
      date,
      endDate: date
    })
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
    this.fetchHistory(this.data.date)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})