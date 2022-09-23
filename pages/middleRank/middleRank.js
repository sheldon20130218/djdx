// pages/middleRank/middleRank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        desc:"天真言：出家超俗，皆宿有良契，故能独拔常伦。若慎终如始，精至修练，当福延七祖，庆流一门。所谓九层之台，起于累土，千里之行，始于足下，乃至功成德就，白日升天。于是乎，开度之时，宜受初真之戒。其戒有十尔，当受之。",
        date:"壬寅年 戊申月 甲辰日",
        checkboxItems: [
            {name: '第一戒者，不得杀害一切众生物命。', value: '1', checked: false},
            {name: '第二戒者，不得啖食众生血肉。', value: '2'},
            {name: '第三戒者，不得饮酒。', value: '3'},
            {name: '第四戒者，不得啖五辛。', value: '4'},
            {name: '第五戒者，不得绮语两舌不信。', value: '5'},
            {name: '第六戒者，不得恶门骂詈。', value: '6'},
            {name: '第七戒者，不得以未得妄言为得，未证妄言为证。', value: '7'},
            {name: '第八戒者，不得窥窥妇女稍生淫念。', value: '8'},
            {name: '第九戒者，不得窃盗人物。', value: '9'},
            {name: '第十戒者，不得妄取人一钱以上物。', value: '10'},
            {name: '第十一戒者，不得图谋一切人物。', value: '11'},
            {name: '第十二戒者，不得横求人物。', value: '12'},
            {name: '第十三戒者，不得恚怒师长。', value: '13'},
            {name: '第十四戒者，不得背师恩爱。', value: '14'},
            {name: '第十五戒者，不得嫉贤妒能。', value: '15'},
            {name: '第十六成者，不得不忠其上。', value: '16'},
            {name: '第十七戒者，不得罔略其下。', value: '17'},
            {name: '第十八戒者，不得欺罔老幼。', value: '18'},
            {name: '第十九戒者，不得欺诳同学。', value: '19'},
            {name: '第二十戒者，不得嫉妒同学。', value: '20'},
            {name: '第二十一戒者，不得轻谩弟子。', value: '21'},
            {name: '第二十二戒者，不得嗔恚弟子。', value: '22'},
            {name: '第二十三戒者，不得视弟子偏颇。', value: '23'},
            {name: '第二十四戒者，不得溺爱弟子。', value: '24'},
            {name: '第二十五戒者，不得说人过恶。', value: '25'},
            {name: '第二十六戒者，不得轻慢老人。', value: '26'},
            {name: '第二十七戒者，不得富厚忘师。', value: '27'},
            {name: '第二十八戒者，不得口是心非内怀阴恶。', value: '28'},
            {name: '第二十九戒者，不得贪利入己无厌，', value: '29'},
            {name: '第三十戒者，不得多积财物不思散施。', value: '30'}
            
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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