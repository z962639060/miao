class MyMap {

    constructor() {
      this._capacity = 16
      this._lists = new Array(this._capacity).fill(null)
      this._size = 0
      this._maxLoadFactor = 0.75
    }
    hashkey(key) {
      const seed = 131
      let hash = 0
      for (const char of key) {
        let code = char.charCodeAt()
        hash = (hash * seed + code) >>> 0
      }
      return hash % this._capacity
    }
  
    set(key, val) {
      const index = hashkey(key)
      let list = this._lists[index]
      let p = list
      while (p) {
        if (p.key === key) {
          p.val = val
          return this
        }
        p = p.next
      }
      let node = {
        key: key,
        val: val,
        next: null
      }
      node.next = list
      this._lists[index] = node
      this._size++
      if (this._size / this._capacity > this._maxLoadFactor) {
        this._expand()
      }
      return this
    }
  
    get(key) {
      const index = hashkey(key)
      let p = this._lists[index]
      while (p) {
        if (p.key === key) {
          return p.val
        }
        p = p.next
      }
    }
  
    has(key) {
      const index = hashkey(key)
      let p = this._lists[index]
      while (p) {
        if (p.key === key) {
          return true
        }
        p = p.next
      }
      return false
    }
  
    delete(val) {
      const index = hashkey(key)
      let dummy = {
        key: '',
        cal: 0,
        next: this._lists[index]
      }
      let p = dummy
      while (p.next) {
        if (p.next.key === key) {
          p.next = p.next.next
          this._lists[index] = dummy.next
          this._size--
          if (this._size / this._capacity < this._maxLoadFactor / 4) {
            this._shrink()
          }
          return true
        }
        p = p.next
      }
      return false
    }
  
    get size() {
      return this._size
    }
  
    _move(targetCapacity) {
      const oldLists = this._lists
      this._capacity = targetCapacity
      this._lists = new Array(this._capacity).fill(null)
      this.size = 0
      for (let list of oldLists) {
        let p = list
        while (p) {
          this.set(p.key, p.val)
          p = p.next
        }
      }
    }
  
    _expand() {
      this._move(this._capacity * 2)
    }
  
    _shrink() {
      if (this._capacity === 16) {
        return
      }
      this._move(this._capacity / 2)
    }
  
    forEach(action) {
      outerloop: for (let list of this._lists) {
        while (list) {
          if (action(list.key, list.val) === false) {
            break outerloop
          }
          list = list.next
        }
      }
    }
  }
  

  class MySet{
    constructor(){
        this.MyMap() = new MyMap()
    }
    set(key,val){
        return this.MyMap.set(key,val)
    }
    get(key){
        return this.MyMap.get(key)
    }
    has(key){
        return this.MyMap.has(key)
    }
    delete(val){
        return this.MyMap.delete(val)
    }
    get size(){
        return this.MyMap.size()
    }
  }

  