class PubSub {
  constructor() {
    this.eventHandlers = {};
  }

  on(name, handler) {
    if (!(name in this.eventHandlers)) {
      this.eventHandlers[name] = [];
    }

    this.eventHandlers[name].push(handler);
  }

  off(name, handler) {
    if (!(name in this.eventHandlers)) return;

    const index = this.eventHandlers[name].indexOf(handler);
    if (index !== -1) {
      this.eventHandlers[name].splice(index, 1);
    }
  }

  emit(name, ...args) {
    if (!(name in this.eventHandlers)) return;

    this.eventHandlers[name].forEach((handler) => {
      handler(...args);
    });
  }

  once(name, handler) {
    const fn = (...args) => {
      handler(...args);
      this.off(name, fn);
    };
    this.on(name, fn);
  }
}

const eventBus = new PubSub();

// eventBus.on('test', () => {
//   console.log('test received');
// });

// eventBus.emit('test');


const onReceived = (...args) => {
  console.log('on test received', ...args);
};

eventBus.once('test with args', onReceived);

// eventBus.on('test with args', onReceived);

eventBus.emit('test with args', 1, 2, 3);

// eventBus.off('test with args', onReceived);
eventBus.emit('test with args', 1, 2, 3);
// eventBus.emit('test with args', 1, 2, 3);
