class Vue {
    constructor(options) {
        this.$options = options;
        this._data = options.data;
        this.initData()//数据代理
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
}

function observe(data){//观测data	美[əbˈzɜːrv] 观察
    //data是基本数据类型就返回
    let type = Object.prototype.toString.call(data)
    if (type !== '[object Object]' && type !== '[object Array]') return;
    new Observer(data)//这个时候并没有递归调用自己 观测对象

}
function defineReactive(obj,key,value){//劫持 工具函数
    //obj:定义的对象  key 定义的属性  value 原来的值
    observe(obj[key])
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function (){
            console.log(`${key}取值`)
            return value
        },
        set:function (val){
            if (val === value) return
            console.log(`${key}改值`)
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