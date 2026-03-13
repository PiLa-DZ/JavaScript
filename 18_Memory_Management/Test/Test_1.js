let memoryEater = [];

function downloadUpdate() {
  const heavyData = new Array(1_000_000).fill("📦");

  if (memoryEater.length < 200) {
    memoryEater.push(heavyData);
    console.log(`Units in RAM: ${memoryEater.length}`);
  } else {
    console.log(memoryEater.length);
  }
}
for (let i = 0; i < 201; i++) downloadUpdate();

setInterval(() => {
  console.log("Wait...");
}, 1000);
