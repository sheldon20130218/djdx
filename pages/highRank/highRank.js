// pages/highRank/highRank.js

const { formatDate } = require("../../utils/util");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        clockined: false,
        desc: "",
        date: '',
        highRanktitle: '',
        preceptList: [],
        clockinIds: [],
        saving: false
    },

    checkboxChange: function ({ detail: { value } }) {
        const { clockined, preceptList } = this.data
        if (!clockined) {
            preceptList.forEach(item => {
                item.isClockin = value.indexOf(item.preceptId + "") !== -1
            })
        }
        this.setData({
            preceptList,
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
            url: `${app.globalData.baseUrl}/api/clockin/superior`,
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
        const time = new Date(formatDate(new Date())).valueOf()
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
                    const highRank = res.data?.highRank || []
                    const highRanktitle = res.data.highRanktitle
                    const clockined = res.data?.highClockIn || false
                    this.setData({
                        highRanktitle,
                        preceptList: highRank,
                        clockined
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
        this.fetchPercept()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})