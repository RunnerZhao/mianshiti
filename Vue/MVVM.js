class MVVM {
    construct(el, data) {
        this.el = document.querySelector(el);
        this._data = data;
        this.init();
    }
    init() {
        this.initData();
        this.initDom();
    }
    initDom() {
        this.bindInput(this.el);
    }
    initData() {
        const _that = this;
        this.data = {};
        for (let key in this_data) {
            object.defineProperty(this.data, key, {
                get() {
                    return _that._data[key];
                }
                set(newValue) {
                    _that._data = newValue;
                }
            })
        }
    }
    bindInput(el) {
        const allInputs = el.querySelectorAll('input');
        allInputs.forEach((input) => {
            const vModel = allInputs.getAttribute('v-model');
            if (vModel) {
                input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input));
            }
        })
    }
    handleInput(key, input) {
        const _value = input.value;
        this.data[key] = _value;
    }
}

/**
 * 1.将数据 -> 响应式数据 Object.defineProperty Proxy
 * 2.input -> input/keyup -> 事件处理函数绑定 -> 改变数据
 *
 *
 *
 */