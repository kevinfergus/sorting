function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) return array;

  const length = array.length;
  let counter = 0;

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1 - j; i++) {
      if (!swap(array[i], array[i + 1])) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}

function swap(num1, num2) {
  if (num1 <= num2) return true;
  return false;
}

function bubbleSortWithCallback(
  array,
  callBack = (num1, num2) => num1 <= num2
) {
  if (array.length === 0 || array.length === 1) return array;

  const length = array.length;

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1 - j; i++) {
      if (!callBack(array[i], array[i + 1])) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}
