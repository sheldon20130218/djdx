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
      elementaryRank: [
        {
          "preceptId": 1,
          "precept": "第一戒者，不得阴贼潜谋，害物利己，当行阴德，广济群生。",
          "preceptDataType": "1",
          "isClockin": true
      },
      {
          "preceptId": 2,
          "precept": "第二戒者，不得杀害含生，以充滋味，当行慈惠，以及昆虫。",
          "preceptDataType": "1",
          "isClockin": true
      },
      {
          "preceptId": 3,
          "precept": "第三戒者，不得淫邪败真，秽慢灵气，当守贞操，使无缺犯。",
          "preceptDataType": "1",
          "isClockin": true
      },
      {
          "preceptId": 4,
          "precept": "第四戒者，不得败人成功，离人骨肉，当以道助物，令九族雍和。",
          "preceptDataType": "1",
          "isClockin": true
      }
      ],
      middleRank: [
        {
          "preceptId": 11,
          "precept": "第一戒者，不得杀害一切众生物命。",
          "preceptDataType": "2",
          "isClockin": true
      },
      {
          "preceptId": 12,
          "precept": "第二戒者，不得啖食众生血肉。",
          "preceptDataType": "2",
          "isClockin": true
      },
      {
          "preceptId": 13,
          "precept": "第三戒者，不得饮酒。",
          "preceptDataType": "2",
          "isClockin": true
      },
      {
          "preceptId": 14,
          "precept": "第四戒者，不得啖五辛。",
          "preceptDataType": "2",
          "isClockin": true
      }
      ],
      hightRank: [
        {
          "preceptId": 311,
          "precept": "一者智慧远身行法。不可称量。",
          "preceptDataType": "3",
          "isClockin": true
      },
      {
          "preceptId": 312,
          "precept": "二者慈悲远身行法。不可称量。",
          "preceptDataType": "2",
          "isClockin": true
      },
      {
          "preceptId": 313,
          "precept": "三者含忍远身行法。不可称量。",
          "preceptDataType": "3",
          "isClockin": true
      },
      {
          "preceptId": 314,
          "precept": "四者行功远身行法。不可称量。",
          "preceptDataType": "3",
          "isClockin": true
      }
      ],
    },

    onDateChange({detail: { value }}) {
      this.setData({
        date: value
      })
    },

    onCheckboxChange({currentTarget: {id}}) {
      const newItems = this.data[id].map(item => {
        return {
          ...item,
          isClockin: true
        }
      })
      this.setData({
        [id]: newItems
      })
    },

    fetchHistory(date) {
      const time = new Date(date)
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
          date: time
        },
        success: (res) => {

        },
        fail: (err) => {

        },
        complete: () => {
          wx.hideLoading()
        }
      })
    },

    watchDate(date) {
      console.log('watch date change', date);
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