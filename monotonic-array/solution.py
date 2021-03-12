def isMonotonic(array):
	if len(array) < 2:
		return True
	
	isDecreasing = None
	
	if array[0] is not array[1]:
    	isDecreasing = array[0] > array[1]
	
	for i in range(len(array)):
		if i + 1 >= len(array):
			break
			
		if array[i] is not array[i + 1] and isDecreasing is None:
    		isDecreasing = array[i] > array[i + 1]
			
		if isDecreasing is None:
			continue
		
		if isDecreasing:
			if array[i] >= array[i + 1]:
				continue
			else:
				return False
		else:
			if array[i] <= array[i + 1]:
				continue
			else:
				return False
				
				
	return True