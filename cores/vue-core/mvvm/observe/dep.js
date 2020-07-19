/* @flow */

import type Watcher from './watcher'
import {
  remove
} from './util'
import config from '../config'

let uid = 0

/**
 * 
 * 发布订阅模式
 * A dep is an observable that can have multiple directives subscribing to it.
 * 是一个可观察的，可有多个指令订阅
 */
export default class Dep {
  static target;
  id;
  subs;

  constructor() {
    this.id = uid++
    this.subs = []
  }
  // 添加订阅、
  addSub(sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub(sub: Watcher) {
    remove(this.subs, sub)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // 发布
  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []

export function pushTarget(target: ? Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget() {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
