// timer
// make a bip 3, 5, 9, 10, 15 seconds
//No numbers are provided: not beep at all and end immediately.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

process.argv.slice(2).forEach((e) => {
  if (!isNaN(e) && e >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, e * 1000);
  }
});
