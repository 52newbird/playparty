// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: "这是一次小测试",
        isshow: true,
        obj: {
            name: "小然子",
            age: "18"
        },
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
    click(event) {
        console.log("事件出发了",event);
    },
    handlefocus() {
        console.log("输入框获取焦点");
    },
    getFs(e){
        console.log(e.target.dataset.fs);
    }
})