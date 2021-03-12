# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeDuplicatesFromLinkedList(linkedList):
	current = linkedList
	
	while current is not None:
		while current.next is not None and current.next.value == current.value:
			current.next = current.next.next
		
		current = current.next
	
	return linkedList