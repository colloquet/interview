function throttle(fn, threshold) {
  let timeout;
  let last;
  
  return function(...args) {
    const context = this;
    let now = Date.now();
    
    if (last && now < last + threshold) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.call(context, ...args);      
      }, threshold);
    } else {
      last = now;
      fn.call(context, ...args);
    }
  }
}

const log = throttle(() => {
  console.log('hi')
}, 500);

setInterval(() => {
  log();
}, 200);