// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad() {
    try {
      const userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        // Do something with return value
        console.log("读取缓存成功", userInfo);
        app.globalData.userInfo = userInfo;
        wx.switchTab({
          url: '/pages/elementaryRank/elementaryRank'
        })
      } else {
        //读取缓存值为空时，重新登陆，并去服务器注册信息，获取用户基本信息
        wx.showLoading({
          title: '登录中'
        })
        wx.login({
          success: res => {
            //注册用户信息
            wx.request({
              url: `${app.globalData.baseUrl}/api/register/${res.code}`,
              success: (res) => {
                console.log("注册成功");
                wx.setStorage({
                  key: "userInfo",
                  data: res.data
                })
                app.globalData.userInfo = res.data
                wx.switchTab({
                  url: '/pages/elementaryRank/elementaryRank'
                })
              },
              fail(res) {
                console.log("注册失败", res);
              },
              complete() {
                wx.hideLoading()
              }
            })
          }
        })
      }
    } catch (e) {
      console.log("读取缓存失败", e);
    };
  },
})
