console.log(biggerIsGreater('abcd'));

function biggerIsGreater(w) {
  if (typeof w == 'string' && !Number(w)) {
    let err,
      word = w.toLowerCase(),
      wordArray = [],
      newWord = '';

    // ASCII codes took from word to array
    for (let i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) <= 122 && word.charCodeAt(i) >= 97) {
        wordArray.push(word.charCodeAt(i));
      } else {
        return 'The word must have an ascii code from 97 to 122';
      }
    }

    let sortedList = [...wordArray];

    sortedList.sort(function (a, b) {
      return a - b;
    });

    let indexArray = [];

    // Index took from wordArray to indexArray
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] < wordArray[i + 1]) {
        indexArray.push(i);
      }
    }

    let okArray = [],
      nonOkWord = '',
      zeroOk = [],
      wordArrayState = false;

    //  wordArray is broken up and distributed to zeroOk, okArray and nonOkWord
    for (const i in wordArray) {
      if (indexArray[indexArray.length - 1] === 0) {
        if (i != indexArray[0] && wordArray[i] > wordArray[0]) {
          okArray.push(wordArray[i]);
        } else {
          zeroOk.push(wordArray[i]);
        }
      } else {
        if (wordArray.length - 2 == indexArray[indexArray.length - 1]) {
          if (i >= indexArray[indexArray.length - 1]) {
            okArray.push(wordArray[i]);
          } else {
            nonOkWord += String.fromCharCode(wordArray[i]).toString();
          }
        } else {
          wordArrayState = true;
          if (i >= indexArray[indexArray.length - 1]) {
            okArray.push(wordArray[i]);
          } else {
            nonOkWord += String.fromCharCode(wordArray[i]).toString();
          }
        }
      }
    }

    let okWord = '';

    // if wordArrayState exists, okArray will be sorted
    if (wordArrayState) {
      okArray = okArray.filter(
        (okA) => okA != wordArray[indexArray[indexArray.length - 1]]
      );
    }

    let greaterValue = Math.min(...okArray);

    okArray = okArray.filter((okA) => okA != greaterValue);

    okArray.sort(function (a, b) {
      return a - b;
    });

    let myOkWord = '';

    //okArray is broken up and distributed to zeroOk, myOkWord ,okWord

    for (const i in okArray) {
      if (zeroOk[0]) {
        zeroOk.push(okArray[i]);
      } else {
        if (wordArrayState) {
          myOkWord += String.fromCharCode(okArray[i]).toString();
        } else {
          okWord += String.fromCharCode(okArray[i]).toString();
        }
      }
    }

    okWord += String.fromCharCode(greaterValue).toString();

    // if wordArrayState exists, values will be added from wordArray to okWord
    if (wordArrayState) {
      okWord += String.fromCharCode(
        wordArray[indexArray[indexArray.length - 1]]
      ).toString();
      okWord += myOkWord;
    }

    zeroOk.sort(function (a, b) {
      return a - b;
    });

    let zeroOkWord = '';

    // if zeroOK exists, zWord will be added to zeroOkWord
    for (const zWord of zeroOk) {
      zeroOkWord += String.fromCharCode(zWord).toString();
    }

    newWord = nonOkWord + okWord + zeroOkWord;

    let isIncludeArray = [];
    // if newWord[i] == word[i] are equal or not, True or False will be added to isIncludeArray
    for (const i in word) {
      if (newWord[i] == word[i]) {
        isIncludeArray.push(true);
      } else {
        isIncludeArray.push(false);
      }
    }

    // if !isIncludeArray.includes(false) is equal to true, err will equal to null
    if (!isIncludeArray.includes(false)) {
      err = null;
      return err;
    }
    return newWord;
  }

  return 'The word must be a string type';
}
