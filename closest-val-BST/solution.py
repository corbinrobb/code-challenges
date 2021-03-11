def findClosestValueInBst(tree, target):
	current = tree
	closest = current.value
	
	while current is not None:
		if abs(target - current.value) < abs(target - closest):
			closest = current.value
			
		if target > current.value:
			current = current.right
		elif target < current.value:
			current = current.left
		else:
			break
		
	
	return closest

# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None