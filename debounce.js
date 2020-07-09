function debounce(fn, delay) {
  let timeout;
  
  return function(...args) {
    const context = this;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.call(context, ...args);      
    }, delay);
  }
}

const log = debounce(() => {
  console.log('hi')
}, 500);

log();
setTimeout(() => {
  log();
}, 100);