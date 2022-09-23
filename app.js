// app.js

App({

    register: function(code){
        let url = "https://www.ywschm.cn/api/register/" + code;
        console.log(url);
        wx.request({
          url: url,
          success(res){
                console.log("注册成功");
                wx.setStorage({
                    key:"userInfo",
                    data:res.data
                })
                console.log(res);

          },
          fail(res){
            console.log("注册失败");
            console.log(res);
          }
        })
    },



  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    require('./utils/precepts.js', precepts => {
        this.globalData.eRank = precepts.elementaryPrecepts;
        this.globalData.mRank = precepts.middlePrecepts;
        this.globalData.hRank = precepts.highPrecepts;
        this.globalData.erc = precepts.elementaryPreceptsContent;
        this.globalData.mrc = precepts.middlePreceptsContent;
        this.globalData.hrc = precepts.highPreceptsContent;
        console.log(this.globalData);
        
        // Wechat MiniProgram
    }, ({mod, errMsg}) => {
        console.error(`path: ${mod}, ${errMsg}`)
    });

    try {
        var value = wx.getStorageSync('userInfo')      
        if (value) {
          // Do something with return value
          console.log("读取缓存成功");
          this.globalData.token = value.token;
        }else{
            //读取缓存值为空时，重新登陆，并去服务器注册信息，获取用户基本信息
            wx.login({
                success: res => {
                    console.log(res);
                    //注册用户信息
                    this.register(res.code);     
                }
            })
        }
      } catch (e) {
        // Do something when catch error
        console.log("读取缓存失败");
      };

        

    
  },

  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: {
    eRank:null,
    mRank:null,
    hRank:null,
    userInfo: null
  }
})
