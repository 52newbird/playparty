// component/fatochid/fatochid.js
const myBehavior = require("../../behavior/my-behavior")
Component({
    behaviors:[myBehavior],
    /**
     * 组件的属性列表
     */
    properties: {
        count:Number
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            this.setData({
                count:this.properties.count +1
            })
            //触发子传父
            this.triggerEvent("count",{count:this.properties.count})
        }
    }
})
