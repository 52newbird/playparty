// pages/tests/tests.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 0
    },
    //监听子组件传来的值 并使用
    getSonCount(e) {
        console.log(e);
        this.setData({
            count: e.detail.count
        })
    },
    //通过选择器获取子组件实例对象
    getInfo() {
        const Info = this.selectComponent("#sonInfo")
        console.log(Info);
        this.setData({
            count: Info.properties.count + 1
        })
    },
    //获取数据转为promise
    async getHtp() {
        const { data: res } = await wx.p.request({
            url: 'http://5990367be1e4470011c46fa8.mockapi.io/meng/user',
            method: "GET"
        })
        console.log(res);
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