// pages/login/login.js
const app = getApp()

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: defaultAvatarUrl,
        theme: wx.getSystemInfoSync().theme,
        nickName: null,
    },

    

    requestNickName : function (avatarBase64){
        let url = "https://www.ywschm.cn/api//user/modifyUserNickname/" + "90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139";
        console.log(url)
        wx.request({
            url: url ,//仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
              nickname: this.data.nickName,
              avatarBase64: avatarBase64
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                console.log(res.data)
                console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            }
          })
    },

    onChooseAvatar(e) {
        const { avatarUrl } = e.detail 
        this.setData({avatarUrl});    
    },
    saveButtonTap(e){
        console.log(e.detail);
        
        console.log(this.data);
        const fs = wx.getFileSystemManager()
        try {
            const res = fs.readFileSync(this.data.avatarUrl, 'base64', 0)
            let avatarBase64 = res;
            console.log(avatarBase64)
            console.log(this.data);
            this.requestNickName(avatarBase64)

        } catch(e) {
            console.error(e)
        }
    },



    inputEdit(e){
        let name = e.detail.value;
        this.setData({
            nickName:name,
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
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