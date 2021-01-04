function twoNumberSum(array, targetSum) {
	// 	Key is target number and value is corresponding value
  let targetNums  = {};
	
	for(let i = 0; i < array.length; i++) {
		const num = array[i];
		const target = targetSum - num;
		if (target in targetNums) {
			return [target, targetNums[target]]
		} else {
			targetNums[num] = target;
		}
	};
	
	return [];
}
