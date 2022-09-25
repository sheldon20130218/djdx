// pages/middleRank/middleRank.js

const { formatDate } = require("../../utils/util");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clockined: false,
    desc: "天真言：出家超俗，皆宿有良契，故能独拔常伦。若慎终如始，精至修练，当福延七祖，庆流一门。所谓九层之台，起于累土，千里之行，始于足下，乃至功成德就，白日升天。于是乎，开度之时，宜受初真之戒。其戒有十尔，当受之。",
    date: '',
    checkboxItems: [
      { name: '第一戒者，不得杀害一切众生物命。', value: '1', checked: false },
      { name: '第二戒者，不得啖食众生血肉。', value: '2' },
      { name: '第三戒者，不得饮酒。', value: '3' },
      { name: '第四戒者，不得啖五辛。', value: '4' },
      { name: '第五戒者，不得绮语两舌不信。', value: '5' },
      { name: '第六戒者，不得恶门骂詈。', value: '6' },
      { name: '第七戒者，不得以未得妄言为得，未证妄言为证。', value: '7' },
      { name: '第八戒者，不得窥窥妇女稍生淫念。', value: '8' },
      { name: '第九戒者，不得窃盗人物。', value: '9' },
      { name: '第十戒者，不得妄取人一钱以上物。', value: '10' },
      { name: '第十一戒者，不得图谋一切人物。', value: '11' },
      { name: '第十二戒者，不得横求人物。', value: '12' },
      { name: '第十三戒者，不得恚怒师长。', value: '13' },
      { name: '第十四戒者，不得背师恩爱。', value: '14' },
      { name: '第十五戒者，不得嫉贤妒能。', value: '15' },
      { name: '第十六成者，不得不忠其上。', value: '16' },
      { name: '第十七戒者，不得罔略其下。', value: '17' },
      { name: '第十八戒者，不得欺罔老幼。', value: '18' },
      { name: '第十九戒者，不得欺诳同学。', value: '19' },
      { name: '第二十戒者，不得嫉妒同学。', value: '20' },
      { name: '第二十一戒者，不得轻谩弟子。', value: '21' },
      { name: '第二十二戒者，不得嗔恚弟子。', value: '22' },
      { name: '第二十三戒者，不得视弟子偏颇。', value: '23' },
      { name: '第二十四戒者，不得溺爱弟子。', value: '24' },
      { name: '第二十五戒者，不得说人过恶。', value: '25' },
      { name: '第二十六戒者，不得轻慢老人。', value: '26' },
      { name: '第二十七戒者，不得富厚忘师。', value: '27' },
      { name: '第二十八戒者，不得口是心非内怀阴恶。', value: '28' },
      { name: '第二十九戒者，不得贪利入己无厌，', value: '29' },
      { name: '第三十戒者，不得多积财物不思散施。', value: '30' }

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
      url: `${app.globalData.baseUrl}/api/clockin/intermediate`,
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