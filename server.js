const fan = process.env.NAME;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log (`${fan} rocks!`);
    await sleep(5000);
    await sleep(5000);
  }
}

main();
