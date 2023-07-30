// app.js
//引入promise化包
import { promisifyAll } from "miniprogram-api-promise"
const wxp = wx.p = {}
promisifyAll(wx, wxp)
App({
    onLaunch(res) {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        console.log(res);
    },
    onShow(res) {
        console.log("111", res);
    },
    onHide() {
        console.log("222");
    },
    onError() {
        console.log("出现错误了");
    },
    onPageNotFound() {
        console.log("页面消失了");
    },
    globalData: {
        userInfo: null
    }
})
