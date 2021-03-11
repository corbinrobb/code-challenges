def moveElementToEnd(array, toMove):
	i = 0;
	end = len(array) - 1
	
    while i < end:
		if array[i] == toMove:
			array.append(array.pop(i))
			end -= 1
		else:
			i += 1
			
	return array
		
