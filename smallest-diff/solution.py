def smallestDifference(arrayOne, arrayTwo):
	arrayOne.sort(), arrayTwo.sort()
	
	smallest = [arrayOne[0], arrayTwo[0]]
	
	i, j = 0, 0
	
	while i < len(arrayOne) and j < len(arrayTwo):
		if abs(arrayOne[i] - arrayTwo[j]) <= abs(smallest[0] - smallest[1]):
			smallest = [arrayOne[i], arrayTwo[j]]
		
		if arrayOne[i] < arrayTwo[j]:
			if i + 1 < len(arrayOne):
				i += 1
			else:
				j += 1
		else:
			if j + 1 < len(arrayTwo):
				j += 1
			else:
				i += 1
			
				
	return smallest