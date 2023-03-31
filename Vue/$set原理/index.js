class Vue {
    constructor(options) {
        this.$options = options;
        this._data = options.data;
        this.initData()//数据代理
        this.initWatch()//watch
    }

    initData() {
        let data = this._data;
        for (let key in data){//数据代理
            //  把data的所有的属性都代理到了new出来的vue实例上，
            //  具体的就是通过defineProperty代理 Vue对象作为obj参数，把data里面的属性作为prop参数
            //  然后在get中返回data[key] set中设置data[key]=value(修改的值)
            Object.defineProperty(this,key,{
                enumerable:true,
                configurable:true,
                get:function (){
                    console.log(`${key}取值代理`)
                    return data[key]
                },
                set:function (value){
                    console.log(`${key}改值 代理`)
                    data[key] = value
                }
            })
        }
        observe(data)

    }
    initWatch(){
        let watch = this.$options.watch
        if (watch){
            for (let key in watch){
                new Watcher(this,key,watch[key])
            }
        }
    }
    $watch(key,cb){
        new Watcher(this,key,cb)
    }
    $set(target,key,value){
        debugger
        defineReactive(target,key,value)
        target.__ob__.dep.notify()//
    }
}

function observe(data){//观测data	美[əbˈzɜːrv] 观察
    //data是基本数据类型就返回
    let type = Object.prototype.toString.call(data)
    if (type !== '[object Object]' && type !== '[object Array]') return;
    return new Observer(data)//这个时候并没有递归调用自己 观测对象

}
function defineReactive(obj,key,value){//劫持 工具函数
    //obj:定义的对象  key 定义的属性  value 原来的值
    let childOb =  observe(obj[key])//递归调用observe
    let dep = new Dep()// 维护一个Dep实例 闭包
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function (){
            console.log(`${key}取值`)
            dep.depend()//收集依赖
            if (childOb){//如果data是对象
                childOb.dep.depend()//收集依赖 调用Observer实例的dep的收集依赖方法
            }
            return value
        },
        set:function (val){
            if (val === value) return
            console.log(`${key}改值`)
            dep.notify()//派发通知
            value = val
        }
    })
}
class Observer{//观测类
    constructor(data) {
        this.dep = new Dep()//创建一个dep实例挂载到observer实例上
        this.walk(data)
        // 给observer实例加__ob__属性，为什么不用this.__ob__ ？因为对象为不可枚举的
        Object.defineProperty(data,'__ob__',{
            value:this,
            enumerable:false,//不可枚举
            configurable:true,
            writable:true
        })
    }
    walk(data){//遍历
        for (let key in data){
            defineReactive(data,key,data[key])//劫持
        }
    }
}
class Dep {//依赖  dependence 的缩写 	美[dɪˈpendəns]
    constructor() {
        this.subs = []// 收集到的Watcher对象集合 订阅发布模式    subs 美[sʌbz] 替补队员
    }
    depend(){//收集依赖
        if (Dep.target){//舞台上有watcher的话就把watcher push到subs中
            this.subs.push(Dep.target)
        }


    }
    notify(){//通知 美[ˈnoʊtɪfaɪ]
        this.subs.forEach((watcher)=>{
            //依次执行回调函数
            watcher.run()
        })
    }
}
let watcherId = 0 ;//每一个new的watcher都有id
let watcherQueue = []//watcher队列
class Watcher{
    constructor(vm,exp,cb) {//vm：vue的实例 exp：求值的属性 cb：回调函数
        this.vm = vm
        this.exp = exp
        this.cb  = cb
        this.id = ++watcherId
        this.get()
    }
    get(){//求值
        Dep.target = this
        this.vm[this.exp]//对vm的exp属性求值触发get
        Dep.target = null
    }
    run(){//运行回调函数
        if (watcherQueue.indexOf(this.id) !== -1){
            //已经存在在队列中 就return
            return
        }
        watcherQueue.push(this.id)//不存在队列中就把watcherId推到队列中
        Promise.resolve().then(() =>{//实现watch的异步执行
            this.cb.call(this.vm)
            console.log("watcherId",this.id)
            watcherQueue.pop()
        })
    }
}