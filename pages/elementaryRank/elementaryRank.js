// pages/elementaryRank/elementaryRank.js

const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        desc:"天真言：出家超俗，皆宿有良契，故能独拔常伦。若慎终如始，精至修练，当福延七祖，庆流一门。所谓九层之台，起于累土，千里之行，始于足下，乃至功成德就，白日升天。于是乎，开度之时，宜受初真之戒。其戒有十尔，当受之。",
        date:"",
        checkboxItems: [
            {name: '第一戒者，不得阴贼潜谋，害物利己，当行阴德，广济群生。', value: '1', checked: false},
            {name: '第二戒者，不得杀害含生，以充滋味，当行慈惠，以及昆虫。', value: '2'},
            {name: '第三戒者，不得淫邪败真，秽慢灵气，当守贞操，使无缺犯。', value: '3'},
            {name: '第四戒者，不得败人成功，离人骨肉，当以道助物，令九族雍和。', value: '4'},
            {name: '第五戒者，不得谗毁贤良，露才扬己，当称人之美善，不自伐其功能。', value: '5'},
            {name: '第六戒者，不得饮酒过羌，食肉违禁，当调和气性，专务清虚。', value: '6'},
            {name: '第七戒者，不得贪求无厌，积财不散，当行节俭，惠恤贫穷。', value: '7'},
            {name: '第八戒者，不得交游非贤，居处秽杂，当慕胜己，栖集清虚。', value: '8'},
            {name: '第九戒者，不得不忠不孝，不仁不信，当尽节君亲，推诚万物。。', value: '9'},
            {name: '第十戒者，不得轻忽言笑，举动非真，当持重寡词，以道德为务。', value: '10'}
        ],
    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            [`formData.radio`]: e.detail.value
        });
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
        app.globalData.userInfo.token = "890E9DCB7251674170F8EFFF16D5E9E6A8A4C31142D406C469447296E6DFDABB"
        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems,
            [`formData.checkbox`]: e.detail.value
        });
    },

    submitForm(event){
        if(this.data.formData == undefined){
            return;
        }
        console.log(this.data.formData.checkbox);
    },

    getDate() {
      wx.request({
        url: `${app.globalData.baseUrl}/api/date/taoDate`,
        method: 'GET',
        header: {
          token: app.globalData.userInfo.token
        },
        success: (res) => {
          console.log('res data', res);
          if (res.statusCode === 200) {
            this.setData({
              date: res.data
            })
          }
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log("elementaryRank onLoad", app.globalData.eRank);
        this.getDate()
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