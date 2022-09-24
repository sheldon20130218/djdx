# djdx
道戒笃行，一个放戒用的小程序代码

功能说明：
我的
1.注册/登陆功能
小程序onLaunch的时候，向服务器注册，服务器返回userInfo信息给小程序。
注册接口：
https://www.ywschm.cn/api/register/{code}
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}


如果已经注册的可以直接使用登陆功能，服务器返回userInfo信息给小程序。
https://www.ywschm.cn/api/login/{token}
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}

2.填写头像昵称功能
https://www.ywschm.cn/api/user/modifyUserNickname/{token}
paramter：无
method：get
return：json(userInfo)
return example：
{"uid":24,"token":"90114C90337DE86D0CB76C19FB1DA736C4F8264097EB7CE7EBCACDF43943D139","nickname":null,"gender":null,"city":null,"avatarBase64":null,"phoneNum":null,"status":1}


3.我的资料功能

4.我的打卡（历史打卡信息）

初真：
1.保存打卡信息

中极：
2.保存打卡信息

天仙：
3.保存打卡信息

获取当天的打卡记录接口


获取指定日期的打卡记录接口



其他功能
道历：在初真、中级、天仙这个三个页面中，需要用到道历字符串
道历接口：
https://www.ywschm.cn/api/date/taoDate/{token}
paramter：无
method：get
return：String
return example：道曆 四七一九年 八月廿九日




