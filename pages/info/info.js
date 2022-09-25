// pages/info/info.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      saving: false,
      info: {
        phone: '13100001111',
        sect: '',
        inheritance: '',
        legalName: '',
        taoistTemple: '',
        currentTaoistTemple: '',
        crownTime: '',
        teachNo: '',
        specialty: ''
      }
    },

    onChange({detail: { value }, currentTarget: { id }}) {
      const key = `info.${id}`
      this.setData({
        [key]: value
      })
    },

    onSave() {
      if (this.data.saving) {
        return
      }
      console.log(this.data.info);
      this.setData({
        saving: true
      })
      // wx.request({
      //   url: `${app.globalData.baseUrl}/save`,
      //   method: 'POST',
      //   header: {
      //     token: app.globalData.userInfo.token
      //   },
      //   success: (res) => {
      //     wx.showToast({
      //       title: '保存成功',
      //     })
      //   }, 
      //   fail: (err) => {
      //     wx.showToast({
      //       title: '保存失败',
      //       icon: 'error'
      //     })
      //   },
      //   complete: () => {
      //     this.setData({
      //       saving: false
      //     })
      //   }
      // })
      setTimeout(() => {
        this.setData({
          saving: false
        })
      }, 5000)
    },

    fetchInfo() {
      wx.request({
        url: `${app.globalData.baseUrl}/api/getInfo`,
        success: (res) => {
          this.setData({
            info: res.data
          })
        },
        fail: (err) => {
          wx.showToast({
            title: '获取我的资料失败',
            icon: 'error'
          })
        }
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      // this.fetchInfo()
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

})