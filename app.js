// app.js

App({
  globalData: {
    baseUrl: 'https://www.ywschm.cn',
    //baseUrl: 'https://172.16.1.34:8443',
    defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    defaultNickname: '微信用户',
    userInfo: {
      nickname: '',
      avatarBase64: '',
      token: '',
    },
  },
  watch(obj, key, method) {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._name = value;
        method(value);
      },
      get: function () {
        return this._name
      }
    })
  },
  onLaunch() {
    require('./utils/precepts.js', precepts => {
      this.globalData.eRank = precepts.elementaryPrecepts;
      this.globalData.mRank = precepts.middlePrecepts;
      this.globalData.hRank = precepts.highPrecepts;
      this.globalData.erc = precepts.elementaryPreceptsContent;
      this.globalData.mrc = precepts.middlePreceptsContent;
      this.globalData.hrc = precepts.highPreceptsContent;
      // Wechat MiniProgram
    }, ({ mod, errMsg }) => {
      console.error(`path: ${mod}, ${errMsg}`)
    });
  },

  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
})
