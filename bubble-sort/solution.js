function bubbleSort(array) {
	let hasSwapped = true;
  while(hasSwapped) {
		hasSwapped = false;
		for (let i = 0; i < array.length; i++) {
			const currentNum = array[i];
			const nextNum = array[i + 1];
			
			if(currentNum > nextNum) {
				array[i] = nextNum;
				array[i + 1] = currentNum;
				hasSwapped = true;
			}
		}
	}
	
	return array
}
