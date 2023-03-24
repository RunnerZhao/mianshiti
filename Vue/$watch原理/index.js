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
        debugger
        if (watch){
            for (let key in watch){
                new Watcher(this,key,watch[key])
            }
        }
    }
    $watch(key,cb){
        debugger
        new Watcher(this,key,cb)
    }
}

function observe(data){//观测data	美[əbˈzɜːrv] 观察
    //data是基本数据类型就返回
    let type = Object.prototype.toString.call(data)
    if (type !== '[object Object]' && type !== '[object Array]') return;
    new Observer(data)//这个时候并没有递归调用自己 观测对象

}
function defineReactive(obj,key,value){//劫持 工具函数
    //obj:定义的对象  key 定义的属性  value 原来的值
    observe(obj[key])//递归调用observe
    let dep = new Dep()// 维护一个Dep实例 闭包
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function (){
            console.log(`${key}取值`)
            dep.depend()//收集依赖
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
        this.walk(data)
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
class Watcher{
    constructor(vm,exp,cb) {//vm：vue的实例 exp：求值的属性 cb：回调函数
        this.vm = vm
        this.exp = exp
        this.cb  = cb
        this.get()
    }
    get(){//求值
        debugger
        Dep.target = this
        this.vm[this.exp]//对vm的exp属性求值触发get
        Dep.target = null
    }
    run(){//运行回调函数
        this.cb.call(this.vm)
    }
}