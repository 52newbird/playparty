// custom-tab-bar/index.js
import { storeBindingsBehavior } from "mobx-miniprogram-bindings"
import { store } from "../store/store"
Component({
    behaviors: [storeBindingsBehavior],
    storeBindings: {
        store,
        fields: {
            numA: "numA",
            numB: "numB",
            sum: "sum",
            active:"active"
        },
        actions: {
            updateNum2: "updateNum2",
            updateActive:"updateActive"
        }
    },
    //为了改变vant weapp样式需开启
    options: {
        styleIsolation: "shared"
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },
    //监听器
    observers:{
        "sum":function(val){
            this.setData({
                "list[1].info":val
            })
        }
    }, 
    /**
     * 组件的初始数据
     */
    data: {
        "list": [
            {
                "pagePath": "/pages/home/home",
                "text": "首页",
                "iconPath": "/assets/首页1.png",
                "selectedIconPath": "/assets/首页2.png"
            },
            {
                "pagePath": "/pages/card/card",
                "text": "卡券",
                "iconPath": "/assets/卡券.png",
                "selectedIconPath": "/assets/卡券2.png",
                info: 2
            },
            {
                "pagePath": "/pages/my/my",
                "text": "我的",
                "iconPath": "/assets/我的-1.png",
                "selectedIconPath": "/assets/我的-2.png"
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            this.setData({
                active: event.detail
            })
            //根据store action更新 active
            this.updateActive(event.detail)
            //切换路由
            wx.switchTab({
              url: this.data.list[event.detail].pagePath,
            })
        }
    }
})
