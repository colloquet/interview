const RAF = {
  setTimeout(fn, delay) {
    const start = Date.now();
    let id;
    const loop = () => {
      if (Date.now() - start > delay) {
        fn();
        cancelAnimationFrame(id);
      } else {
        requestAnimationFrame(loop);
      }
    };
    id = requestAnimationFrame(loop);
    return id;
  },
  clearTimeout(id) {
    cancelAnimationFrame(id);
  },
  setInterval(fn, delay) {
    let start = Date.now();
    let id;
    const loop = () => {
      const now = Date.now();
      if (now - start > delay) {
        start = now;
        fn();
      }
      requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return id;
  }
};

RAF.setInterval(() => {
  console.log('hi');
}, 1000);

setInterval(() => {
  console.log('hi1');
}, 1000);