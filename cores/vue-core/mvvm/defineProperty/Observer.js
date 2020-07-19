import Dep from './Dep'

export default class Observer {
  constructor(value) {
    this.value = value
    if (!Array.isArray(value)) {
      this.walk(value)
    }
  }
  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

export function defineReactive(data, key, val) {
  // 如果是对象，递归子属性
  if (typeof val === 'obj') {
    new Observer(val)
  }

  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend() // 收集依赖
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      dep.notify()
    },
  })
}
