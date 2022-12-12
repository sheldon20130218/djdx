// pages/history/history.js
const app = getApp()
const { formatDate } = require("../../utils/util");
const typeMap = {
    elementaryRank: 'elementary',
    middleRank: 'intermediate',
    highRank: 'superior',
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        endDate: '',
        date: '',
        elementaryClockIn: true,
        elementaryRank: [],
        middleClockIn: true,
        middleRank: [],
        highClockIn: true,
        highRank: [],
        clockinObj: {},
        clockinIds: {},
        saving: false,
    },

    onLoad() {
        try {
          const userInfo = wx.getStorageSync('userInfo')
          if (!userInfo) {
            wx.switchTab({
                url: '/pages/index/index'
            })
          }
        } catch (e) {
          console.log("读取缓存失败", e);
        };
    },

    onDateChange({ detail: { value } }) {
        this.setData({
            date: value
        })
    },

    onCheckboxChange({ currentTarget: { id }, detail: { value } }) {
        const preceptList = this.data[id]
        const clockined = this.data.clockinObj[id]
        const clockinIdKey = `clockinIds.${id}`
        if (!clockined) {
            preceptList.forEach(item => {
                item.isClockin = value.indexOf(item.preceptId + "") !== -1
            })
        }
        console.log(clockined, value, preceptList);
        this.setData({
            [id]: preceptList,
            [clockinIdKey]: value
        })
    },

    onSave({ currentTarget: { id } }) {
        const { saving } = this.data
        const clockined = this.data.clockinObj[id]
        const clockinIds = this.data.clockinIds[id]
        console.log(id, saving, clockined);
        if (clockined || saving || clockinIds.length === 0) {
            return
        }
        wx.showLoading({
            title: '正在补卡',
        })
        this.setData({
            saving: true
        })
        const time = new Date(this.data.date).valueOf()
        wx.request({
            url: `${app.globalData.baseUrl}/api/clockin/${typeMap[id]}`,
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
                                title: '补卡完成',
                                success: () => {
                                    this.fetchHistory(this.data.date)
                                }
                            })
                        }
                    })
                } else {
                    wx.hideLoading({
                        success: () => {
                            wx.showToast({
                                title: '补卡失败',
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

    fetchHistory(date) {
        const time = new Date(date).valueOf()
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
                time
            },
            success: (res) => {
                if (res.statusCode === 200) {
                    const { elementaryClockIn, elementaryRank, middleClockIn, middleRank, highClockIn, highRank, highRankTitle } = res.data
                    const clockinObj = {
                        elementaryRank: elementaryClockIn,
                        middleRank: middleClockIn,
                        highRank: highClockIn
                    }
                    this.setData({
                        elementaryRank,
                        middleRank,
                        highRank,
                        highRankTitle,
                        clockinObj,
                        clockinIds: {}
                    })
                    wx.hideLoading()
                } else {
                    wx.hideLoading({
                        success: (res) => {
                            wx.showLoading({
                                title: '数据加载失败，请稍后重试',
                                icons: 'error'
                            })
                        },
                    })
                }
            },
            fail: (err) => {
                wx.hideLoading({
                    success: (res) => {
                        wx.showLoading({
                            title: '数据加载失败，请稍后重试',
                            icons: 'error'
                        })
                    },
                })
            },
            complete: () => {
                wx.stopPullDownRefresh()
            }
        })
    },

    watchDate(date) {
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
        this.fetchHistory(this.data.date)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})