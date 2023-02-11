const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

let arr = [8, 11, 1, 9, 10, 5, 7, 6, 3, 2, 4];
console.log(selectionSort(arr));
