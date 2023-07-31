import { observable ,action } from "mobx-miniprogram"
export const store = observable({
    //普通数组
    numA: 1,
    numB: 2,
    active: 0,
    //计算属性 get必加 只读状态
    get sum() {
        return this.numA + this.numB
    },
    //action 修改store内的值 类似 vuexactios
    updateNum1:action(function(step){
        this.numA += step
    }),
    updateNum2:action(function(step){
        this.numB += step
    }),
    updateActive:action(function(index){
        this.active = index
    })
})