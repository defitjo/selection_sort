var selectionSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
var arr = [8, 11, 1, 9, 10, 5, 7, 6, 3, 2, 4];
console.log(selectionSort(arr));
