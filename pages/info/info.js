const { formatDate } = require("../../utils/util")

// pages/info/info.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        saving: false,
        info: {
            legalName: '',
            gender: '',
            phoneNum: '',
            sect: '',
            master: '',
            address: '',
            hatDate: '',
            hatAddress: '',
            receivePreceptsDate: '',
            receivePreceptsAddress: '',
            certificateCode: '',
            specialty: ''
        },
        rules: [{
            name: 'legalName',
            rules: [{ required: true, message: '请输入法名' }]
        }, {
            name: 'gender',
            rules: [{ required: true, message: '请选择性别' }]
        }, {
            name: 'sect',
            rules: [{ required: true, message: '请输入宗派名称' }]
        }, {
            name: 'master',
            rules: [{ required: true, message: '请输入师承' }]
        }, {
            name: 'address',
            rules: [{ required: true, message: '请现居地址' }]
        }],
        errors: {},
        endDate: ''
    },

    onChange({ detail: { value }, currentTarget: { id } }) {
        const key = `info.${id}`
        const { errors } = this.data
        delete errors[id]

        this.setData({
            [key]: value,
            errors
        })
    },

    onSave() {
        if (this.data.saving) {
            return
        }
        this.selectComponent("#infoForm").validate((valid, errorArray) => {
            if (!valid) {
                const { errors } = this.data
                errorArray.forEach(item => {
                    errors[item.name] = item.message
                })
                this.setData({
                    errors
                })
                wx.showToast({
                    title: '请填写必要信息',
                    icon: 'error'
                })
                return
            }
            this.setData({
                saving: true
            })
            wx.showLoading({
                title: '保存中',
            })
            const data = this.data.info
            const hatDate = new Date(data.hatDate).valueOf()
            const receivePreceptsDate = new Date(data.receivePreceptsDate).valueOf()
            data.hatDate = hatDate
            data.receivePreceptsDate = receivePreceptsDate
            wx.request({
                url: `${app.globalData.baseUrl}/api/user/updateExtension`,
                method: 'POST',
                header: {
                    token: app.globalData.userInfo.token
                },
                data,
                success: (res) => {
                    if (res.statusCode === 200) {
                        wx.hideLoading({
                            success: (res) => {
                                wx.showToast({
                                    title: '保存成功',
                                })
                            },
                        })
                    } else {
                        wx.hideLoading({
                            success: (res) => {
                                wx.showToast({
                                    title: '保存失败',
                                    icon: 'error'
                                })
                            },
                        })
                    }
                },
                fail: (err) => {
                    wx.hideLoading({
                        success: (res) => {
                            wx.showToast({
                                title: '保存失败',
                                icon: 'error'
                            })
                        },
                    })
                },
                complete: () => {
                    this.setData({
                        saving: false
                    })
                }
            })
        })
    },

    fetchInfo() {
        wx.request({
            url: `${app.globalData.baseUrl}/api/user/findUserInfo`,
            method: 'POST',
            header: {
                token: app.globalData.userInfo.token
            },
            success: (res) => {
                const data = res.data
                const info = {
                    legalName: data.legalName,
                    gender: data.gender,
                    phoneNum: data.phoneNum,
                    sect: data.sect,
                    master: data.master,
                    address: data.address,
                    hatDate: data.hatDate ? formatDate(new Date(data.hatDate)) : '',
                    hatAddress: data.hatAddress,
                    receivePreceptsDate: data.receivePreceptsDate ? formatDate(new Date(data.receivePreceptsDate)) : '',
                    receivePreceptsAddress: data.receivePreceptsAddress,
                    certificateCode: data.certificateCode,
                    specialty: data.specialty
                }
                this.setData({
                    info
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
        this.fetchInfo()
        const endDate = formatDate(new Date)
        this.setData({
            endDate
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

})