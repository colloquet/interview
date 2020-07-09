function f() {
  setTimeout(() => {
    console.log(1);
  });

  new Promise((resolve, reject) => {
    console.log(2);
    resolve(3);
  }).then((data) => {
    console.log(data);
  });

  setTimeout(() => {
    console.log(4);
  });

  console.log(5);
}

// f();
// 2
// 5
// 3
// 1
// 4

function f1() {
  setTimeout(() => {
    console.log(5);
    Promise.resolve().then(() => {
      console.log(6);
    });
  });

  new Promise((resolve, reject) => {
    console.log(1);
    resolve(1);
  }).then(() => {
    console.log(2);

    Promise.resolve().then(() => {
      console.log(3);
    });

    setTimeout(() => {
      console.log(4);
    });

    Promise.resolve().then(() => {
      console.log(7);
    });
  });
}

f1();
// 1
// 2
// 3
// 7
// 5
// 6
// 4

// macro task (oldest one) -> all micro tasks (including micro tasks generated from other micro tasks) -> render

// in Node.js used to be this process.maxTickDepth = 1000
// that limits the max number of micro task to process in each event loop
// it has been removed since v0.12
