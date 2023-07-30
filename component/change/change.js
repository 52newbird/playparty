// component/change/change.js
Component({
    /**
     * 组件的属性列表
     */
    //options
    options:{
        //app。json是否可以影响到组件
        styleIsolation:"apply-shared"
    },
    // 小程序监听器
    observers: {
        "numb,count": function (num, count) {
            this.setData({
                sum: num + count
            })
        },
        '_rgb.**': function (obj) {
            this.setData({
                defColor: `${obj.r}, ${obj.g}, ${obj.b}`
            })
        }
    },
    properties: {
        //接受引用该组件的值 可以规定类型 类似父传子
        // max:Number
        // 完整格式
        max: {
            type: Number,
            value: 10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0,
        numb: 0,
        sum: 0,
        _rgb: {
            r: 0,
            g: 0,
            b: 0
        },
        defColor: "0,0,0"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount() {
            if (this.data.count >= this.properties.max) return
            this.setData({
                count: this.data.count + 1
            }),
                this._showCount()
        },
        addCount2() {
            if (this.data.count >= this.properties.max) return
            this.setData({
                numb: this.data.numb + 1
            }),
                this._showCount()
        },
        // 自定义属性
        _showCount() {
            wx.showToast({
                title: 'count值为:' + this.data.count + this.data.numb,
                icon: "none"
            })
        },
        changeR() {
            this.setData({
                '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
            })
        },
        changeG() {
            this.setData({
                '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            })
        },
        changeB() {
            this.setData({
                '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            })
        },
        //自定义随机颜色
        _randomColor() {
            this.setData({
                _rgb: {
                    r: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    b: Math.floor(Math.random() * 256),
                }
            })
        }
    },
    lifetimes: {
        created() {
            console.log("created执行");
            console.log("组件周期");
        },
        attached() {
            console.log("attached执行");
        },
        detached(){
            console.log("detached执行");
        }
    },
    pageLifetimes: {
        show() {
            console.log("show");
            this._randomColor()
        },
        hide() {
            console.log("hide");
        },
        resize() {
            console.log("resize");
        }
    },
})
