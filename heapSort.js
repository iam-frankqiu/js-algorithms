const heapify = (arr, length, start) => {
    let largest = start, left = 2 * start + 1, right = 2* start +2;
    if (left< length && arr[left] > arr[largest]) {
        largest = left;
    } else if (right < length && arr[right] > arr[largest]) {
       largest = right;
    }
    if (largest !== start) {
        [arr[start], arr[largest]] = [arr[largest], arr[start]]
        heapify(arr, length, largest);
    }

}

const heapSort = (arr, k) => {
  const { length } = arr;
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
  for (let i = length - 1; i > 0; i--) {
      [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0)
  }
  return arr;
};

console.log(heapSort([3,4,2,5,1], 2))
