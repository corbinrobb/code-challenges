function moveElementToEnd(array, toMove) {
  let i = 0;
  let end = array.length - 1;

  while (i < end) {
    if (array[i] === toMove) {
      array.push(array.splice(i, 1)[0]);
      end--;
    } else {
      i++;
    }
  }

  return array;
}
