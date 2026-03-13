run();
function top() {
  console.clear();
  const memoryUsage = process.memoryUsage();
  console.log(`RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
  console.log(
    `Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
  );
}
function run() {
  let memoryEater = [];
  let len = 250;
  for (let i = 0; i < len; i++) {
    const heavyData = new Array(1_000_000).fill("📦");
    if (memoryEater.length < len - 1) {
      memoryEater.push(heavyData);
      console.log(`Units in RAM: ${memoryEater.length}`);
      top();
    } else {
      console.log(memoryEater.length);
    }
  }
}

setInterval(top, 1000);
