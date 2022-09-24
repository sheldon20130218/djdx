// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempAvatarFilePath: undefined,
    avatarUrl: undefined,
    theme: wx.getSystemInfoSync().theme,
    nickname: null,
  },

  requestNickName: function (avatarBase64) {
    let url = `${app.globalData.baseUrl}/api/user/modifyUserNickname`;
    const { nickname } = this.data
    wx.request({
      url: url,//仅为示例，并非真实的接口地址
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        token: app.globalData.userInfo.token
      },
      data: {
        nickname: nickname,
        avatarBase64: avatarBase64
      },
      success(res) {
        if (res.statusCode === 200) {
          wx.setStorageSync('userInfo', res.data)
          app.globalData.userInfo = res.data
          wx.showToast({
            title: '保存成功',
            duration: 30000,
            success: () => {
              wx.navigateBack({
                delta: 1,
              })
            }
          })
        } else {
          wx.showToast({
            title: '保存失败',
            icon: 'error'
          })
        }
      }
    })
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    this.setData({ avatarUrl });
  },
  saveButtonTap(e) {
    const { avatarUrl } = this.data
    let newAvatar = ''
    if (avatarUrl && avatarUrl.startsWith("tmp")) {
      const fs = wx.getFileSystemManager()
        const base64Text = fs.readFileSync(this.data.avatarUrl, 'base64', 0)
        newAvatar = `data:image/png;base64, ${base64Text}`
    } else {
      try {
        newAvatar = avatarUrl
      } catch (e) {
        console.error(e)
      }
    }
    this.requestNickName(newAvatar)
  },

  bindNicknameInput(e) {
    let name = e.detail.value;
    this.setData({
      nickname: name,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      avatarUrl: app.globalData.userInfo?.avatarBase64 || app.globalData.defaultAvatarUrl,
      nickname: app.globalData.userInfo?.nickname || app.globalData.defaultNickname
    })
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme
      })
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