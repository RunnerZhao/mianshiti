## Vue

>一往无前，方法论。

- 1.Vue响应式原理？(必问)

>[答案](https://juejin.cn/post/6844904084374290446#heading-1)

- 2.Vue组件通信？（必问）

>[答案](https://juejin.cn/post/6844904084374290446#heading-21)

- 3.Vue生命周期？（必问）

>[答案](https://juejin.cn/post/6844904084374290446#heading-5)

- 4.Vue2和Vue3的区别？(必问)

- 5.Vue和React的区别？(必问)

- 6.Vue项目如何做性能优化？(必问)

>[答案](https://juejin.cn/post/6844904084374290446#heading-23)

- 7.Vue的nextTick实现原理以及应用场景？(必问)

>[答案](https://juejin.cn/post/6844904084374290446#heading-4)

- 8.Vue中watch和computed的区别？(大概率)

>[答案](https://juejin.cn/post/6844904084374290446#heading-7)

- 9.说下Vue的keepalive？(大概率)

>[答案](https://juejin.cn/post/6844904084374290446#heading-15)

- 7.你是如何理解MVVM与MVP以及MVC这些模式的？(大概率)

>[答案](https://juejin.cn/post/6844904084374290446#heading-0)

- 8.vue-router的实现原理？（大概率）

- 9.Vuex的实现原理？（大概率）
介绍vuex
官方解释: Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
大白话：对数据(data)统一的管理,如果涉及到了数据的处理，来，到vuex里面进出吧！就像是超市对商品的统一管理一样
import Vue from 'vue'; //首先引入vue
import Vuex from 'vuex'; //引入vuex
Vue.use(Vuex) 

export default new Vuex.Store({
    state: { 
        // state 类似 data
        //这里面写入数据
    },
    getters:{ 
        // getters 类似 computed 
        // 在这里面写个方法
    },
    mutations:{ 
        // mutations 类似methods
        // 写方法对数据做出更改(同步操作)

    },
    actions:{
        // actions 类似methods
        // 写方法对数据做出更改(异步操作)
    }
})
//可能有的地方书写的风格不是这样的，如果需要的了解的可以百度看看其他人的
在dom中使用方法为：$store.commit()加上store.js中的属性的名称
如果你想要直接使用一些数据，但是在computed中没有给出来怎么办？ 可以写成这样 {{ $store.state.goods.totalPrice }}

- 10.路由守卫？

- 11.diff算法？

>深度比较，同层优先。

>先比较同级，再比较子节点。如果都有子节点的话，会递归比较。

- 12.详细说说Vue双向绑定原理？

- 13.Vue2和Vue3的区别？(必问)

- 14.Vue和React的区别？(必问)

- 15.Vue父子组件执行过程中生命周期？

- 16.Vue父子组件通信？

>父组件传递数据给子组件是通过Props，子组件通过Props接收。

- 17.当v-if和v-for同时使用时，v-for比v-if有更高的优先级。如果想避免这种情况可以在外层放一个template元素上做判断，这样就会先判断后循环。也可以将判断先放到计算属性里面判断，然后再把返回的值给到v-for进行遍历，这两种方法都可以。

- 18.Vue中的data为什么是函数，如果Vue中的data是对象的话，那么他的对象属性如果是引用类型的话，那么在复用组件的时候，创建多个实例，这些实例用的都是同一个构造函数，就会影响到所有实例，为了保证组件间不同的实例之间的独立性，data必须是一个函数。

- 19.Vue性能优化？

>1.路有懒加载

>2.keep-alive缓存页面

>3.使用v-show复用dom

>4.v-for同级别避免使用v-if

>5.长列表性能优化，如果只是做纯粹的数据展示，不会有任何改变，就不需要响应化，对对象进行冻结。

>6.事件销毁

>7.图片懒加载 vue-lazyload

>8.插件按需引入

>9.SSR,服务端渲染。

- 20.双向绑定具体过程？

>发布订阅模式和观察者模式之间的区别

>发布订阅模式：发布者=>事件中心<=>订阅者。

>观察者模式：目标 <=> 观察者

