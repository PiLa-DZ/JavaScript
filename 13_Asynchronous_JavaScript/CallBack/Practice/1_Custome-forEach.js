// Sync CallBack
Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

const packages = ["package_1", "package_2", "package_3"];

console.log("Start Doing SomeThing 1");

packages.myForEach((elm, i) => {
  console.log(elm, i);
});

console.log("Start Doing SomeThing 2");
console.log("Start Doing SomeThing 3");

// Start Doing SomeThing 1
// package_1 0
// package_2 1
// package_3 2
// Start Doing SomeThing 2
// Start Doing SomeThing 3
