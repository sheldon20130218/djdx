const app = getApp()
export function myLogin() {
  wx.login({
    success: res => {
      //注册用户信息
      wx.request({
        url: `${getApp().globalData.baseUrl}/api/register/${res.code}`,
        success: (res) => {
          console.log("注册成功");
          wx.setStorage({
            key: "userInfo",
            data: res.data
          })
          getApp().globalData.userInfo = res.data
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