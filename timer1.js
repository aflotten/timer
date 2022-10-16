const args = process.argv.slice(2).filter(alarm => !isNaN(alarm)).filter(alarm => alarm >= 0); // slice to get just CMD line args, filter out non-num and ensure itws over 0

args.forEach((alarm) => {
  setTimeout(() => {
    process.stdout.write('\x07'); //this returns sound when arg runs true
  }, alarm * 1000); // allow it to count by one second and specify alarm so it only makes the sound after given amount of time from alarm command
});