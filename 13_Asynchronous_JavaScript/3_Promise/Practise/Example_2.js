let rand = () => Math.random() < 0.5;

new Promise((resolve, reject) => {
  if (rand()) resolve("Operation1 Success");
  else reject("Operation1 Failed!");
})

  .then((result) => {
    console.log(result);

    if (rand()) return Promise.resolve("Operation2 Success");
    return Promise.reject("Operation2 Failed!");
  })

  .then((resule) => {
    console.log(resule);
    if (rand()) return Promise.resolve("Operation3 Success");
    return Promise.reject("Operation3 Failed!");
  })

  .then((resule) => {
    console.log(resule);
  })

  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Promise End..."));

// ============================================================
// Operation1 Failed!
// Promise End...
// ============================================================
// Operation1 Success
// Operation2 Failed!
// Promise End...
// ============================================================
// Operation1 Success
// Operation2 Success
// Operation3 Failed!
// Promise End...
// ============================================================
// Operation1 Success
// Operation2 Success
// Operation3 Success
// Promise End...
