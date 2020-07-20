function mySetInterval(cb, delay) {
  function interval() {
    setTimeout(interval, delay);
    cb();
  }

  setTimeout(interval, delay);
}

mySetInterval(() => {
  console.log('test')
}, 1000);