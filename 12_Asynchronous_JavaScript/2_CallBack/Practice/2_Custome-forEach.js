// Async CallBack
Array.prototype.myAsyncForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    // We hand the callback to the Node API (Timers)
    setTimeout(() => callback(this[i], i), 0);
  }
};

const packages = ["package_1", "package_2", "package_3"];

console.log("Start Doing SomeThing 1");

packages.myAsyncForEach((elm, i) => {
  console.log(elm, i);
});

console.log("Start Doing SomeThing 2");
console.log("Start Doing SomeThing 3");

// Start Doing SomeThing 1
// Start Doing SomeThing 2
// Start Doing SomeThing 3
// package_1 0
// package_2 1
// package_3 2
