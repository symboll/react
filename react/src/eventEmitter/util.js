class EventEmitter {
  constructor() {
    this.eventMap = new Map()
  }

  on(type, handler) {

    if (typeof handler !== 'function') {
      throw new Error("error");
    }

    if(!this.eventMap.has(type)) {
      this.eventMap.set(type, [])
    }

    this.eventMap.get(type).push(handler);
  }

  emit(type, params) {

    if (this.eventMap.has(type)) {
      this.eventMap.get(type).forEach(handler => {
        handler.call(null, params)
      })
    }
  }
  off(type, handler) {
    if(this.eventMap.has(type)) {
      const index = this.eventMap.get(type).indexOf(handler)
      if(index >= 0) {
        this.eventMap.get(type).splice(index, 1)
      }
    }
  }
}

const eventEmitter = new EventEmitter()

export default eventEmitter