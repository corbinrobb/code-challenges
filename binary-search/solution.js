function binarySearch(array, target) {
	let mid = Math.floor((array.length - 1) / 2);
	let start = 0;
	let end = array.length - 1;
	
  while(start <= end) {
		if (array[mid] < target) {
			start = mid + 1;
			mid = Math.floor((end - start) / 2) + start;
		} else if (array[mid] > target) {
			end = mid - 1;
			mid = end - Math.floor((end - start) / 2);
		} else if (array[mid] === target) {
			return mid;
		}
	}
	
	return -1
}
