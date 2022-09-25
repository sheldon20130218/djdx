// pages/highRank/highRank.js

const { formatDate } = require("../../utils/util");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      clockined: false,
        desc:"",
        date: '',
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
        clockinIds: [],
    saving: false
    },

    checkboxChange: function ({ detail: { value } }) {
      const { clockined, checkboxItems } = this.data
      if (!clockined) {
        checkboxItems.forEach(item => {
          item.checked = value.indexOf(item.value) !== -1
        })
      }
      this.setData({
        checkboxItems,
        clockinIds: value
      })
    },
  
    onSave() {
      const { clockined, clockinIds, saving } = this.data
      if (clockined || saving || clockinIds.length === 0) {
        return
      }
      wx.showLoading({
        title: '正在打卡',
      })
      this.setData({
        saving: true
      })
      const time = new Date(formatDate(new Date())).valueOf()
      wx.request({
        url: `${app.globalData.baseUrl}/api/clockin/superior`,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          token: app.globalData.userInfo.token
        },
        data: {
          time: time,
          preceptIds: clockinIds.join()
        },
        success: (res) => {
          if (res.statusCode === 200) {
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '打卡完成',
                })
              }
            })
            this.setData({
              clockined: true
            })
          } else {
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '打卡失败',
                })
              }
            })
          }
        },
        fail: (err) => {
          wx.hideLoading({
            success: () => {
              wx.showToast({
                title: '打卡失败',
              })
            }
          })
        },
        complete: () => {
          this.setData({
            saving: false
          })
        }
      })
    },
  
    getDate() {
      wx.request({
        url: `${app.globalData.baseUrl}/api/date/taoDate`,
        method: 'GET',
        header: {
          token: app.globalData.userInfo.token
        },
        success: (res) => {
          if (res.statusCode === 200) {
            this.setData({
              date: res.data
            })
          }
        }
      })
    },
  
    fetchPercept() {
      wx.request({
        url: `${app.globalData.baseUrl}/api/precepts/today`,
        header: {
          token: app.globalData.userInfo.token
        },
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            console.log('res data', res.data);
          }
        }
      })
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.getDate()
      this.fetchPercept()
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