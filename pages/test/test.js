// pages/test/test.js
Page({
    //上拉加载
    onPullDownRefresh() {
        
        // 可以修改数据等
        wx.stopPullDownRefresh()
    },
    //下拉触底
    onReachBottom:function(){
        console.log("触发触底事件");
    },
    /**
     * 页面的初始数据
     */
    onLoad(options) {
        // 接受参数
        console.log(options);
        this.setData({
            query:options
        })
        //加载请求动画
        wx.showLoading({
            title: '数据加载中',
        }),
            wx.request({
                url: 'http://5990367be1e4470011c46fa8.mockapi.io/meng/user',
                success(res) {
                    //   console.log(res);
                    //   wx.showToast({
                    //     title: '登陆成功',
                    //     icon:"success",
                    //     duration:2000
                    //   })
                    wx.showModal({
                        title: '你好世界',
                        content: '这是登录提示',
                        complete: (res) => {
                            if (res.cancel) {
                                console.log("用户取消了")
                                wx.setStorage({
                                    key: "key",
                                    data: 123456
                                })
                            }
                            if (res.confirm) {
                                console.log("用户确定了")
                                //  wx.switchTab({
                                //    url: '/pages/home/home',
                                //  })
                                wx.removeStorage({
                                    key: "key",
                                    success(res) {
                                        console.log(res.data);
                                    }
                                })
                            }
                        }
                    })
                },
                complete:()=>{
                    wx.hideLoading()
                }
            })
    },
    onReady(){
        wx.setNavigationBarTitle({
          title: this.data.query.name,
          
        })
    },
    data: {
        msg: "这是一次小测试",
        isshow: true,
        obj: {
            name: "小然子",
            age: "18"
        },
        query:{},
        user: [
            { id: 1, name: "小艾看到", age: 18 },
            { id: 2, name: "小艾到", age: 18 },
            { id: 3, name: "小看到", age: 18 },
            { id: 4, name: "艾看到", age: 18 },
        ],
        students: [
            { id: 0, name: "xiaoran", fs: 98 },
            { id: 1, name: "xiaoyuan", fs: 60 },
            { id: 2, name: "aqi", fs: 50 }
        ]
    },
    // 视图更新
    changeview() {
        this.setData({
            msg: "我是无敌小然子",
            isshow: false,
            ["obj.name"]: "小软子",
            ["students[2].fs"]: 90
        })
    },
    click(event) {
        console.log("事件出发了", event);
    },
    handlefocus() {
        console.log("输入框获取焦点");
    },
    getFs(e) {
        console.log(e.target.dataset.fs);
    },
    test1() {
        console.log("父元素点击");
    },
    test2() {
        console.log("子元素点击");
    }
})