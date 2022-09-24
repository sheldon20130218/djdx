# djdx
道戒笃行，一个放戒用的小程序代码

功能说明：
我的
1.注册/登陆功能
小程序onLaunch的时候，向服务器注册，服务器返回userInfo信息给小程序。
注册接口：
https://www.ywschm.cn/api/register
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}


如果已经注册的可以直接使用登陆功能，服务器返回userInfo信息给小程序。
https://www.ywschm.cn/api/login
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}

2.填写头像昵称功能
https://www.ywschm.cn/api/user/modifyUserNickname
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}


3.我的资料功能

4.我的打卡（历史打卡信息）

初真：
1.保存打卡信息
打卡接口：
https://www.ywschm.cn/api/clockin/elementary
paramter：
属性名：time；类型：long，作用：时间毫秒数
属性名：preceptIds 类型：String  示例：1,2,3,4
method：post
return：json
return example：
[
    {
        "preceptId": 1,
        "precept": "第一戒者，不得阴贼潜谋，害物利己，当行阴德，广济群生。",
        "preceptDataType": "1",
        "isClockin": true
    },
    {
        "preceptId": 2,
        "precept": "第二戒者，不得杀害含生，以充滋味，当行慈惠，以及昆虫。",
        "preceptDataType": "1",
        "isClockin": true
    },
    {
        "preceptId": 3,
        "precept": "第三戒者，不得淫邪败真，秽慢灵气，当守贞操，使无缺犯。",
        "preceptDataType": "1",
        "isClockin": true
    },
    {
        "preceptId": 4,
        "precept": "第四戒者，不得败人成功，离人骨肉，当以道助物，令九族雍和。",
        "preceptDataType": "1",
        "isClockin": true
    }
]


中极：
2.保存打卡信息
https://www.ywschm.cn/api/clockin/intermediate
paramter：
属性名：time；类型：long，作用：时间毫秒数
属性名：preceptIds 类型：String 
method：post
return：json




天仙：
3.保存打卡信息
https://www.ywschm.cn/api/clockin/superior
paramter：
属性名：time；类型：long，作用：时间毫秒数
属性名：preceptIds 类型：String 
method：post
return：json


获取当天的打卡记录接口


获取指定日期的打卡记录接口



其他功能
道历：在初真、中级、天仙这个三个页面中，需要用到道历字符串
道历接口：
https://www.ywschm.cn/api/date/taoDate
paramter：无
method：get
return：String
return example：道曆 四七一九年 八月廿九日




