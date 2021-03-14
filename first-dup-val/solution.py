def firstDuplicateValue(array):
    for x in array:
		x = abs(x)
		if array[x - 1] < 0:
			return x
		else:
			array[x - 1] = -1 * array[x - 1]
		
	return -1
		