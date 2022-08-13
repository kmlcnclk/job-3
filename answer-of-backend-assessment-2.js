console.log(superDigit(9875));

function superDigit(num) {
  // if num is a positive number, it is gonna work
  if (typeof num == 'number' && num > 0) {
    var numStr = parseInt(num).toString();

    // if numStr.length > 1, it is gonna work
    while (numStr.length > 1) {
      var value = 0;
      // numStrItem is gonna add to value
      for (const numStrItem of numStr) {
        value += parseInt(numStrItem);
      }
      numStr = value.toString();
    }
    return parseInt(numStr);
  }
  return 'The num variable must be a positive number';
}
