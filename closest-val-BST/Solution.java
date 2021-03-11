import java.util.*;

class Program {
  public static int findClosestValueInBst(BST tree, int target) {
		BST current = tree;
		int closestVal = tree.value;
		
		while(current != null) {
			if(Math.abs(target - current.value) < Math.abs(target - closestVal))
				closestVal = current.value;
			
			if(target > current.value) {
				current = current.right;
			} else if(target < current.value) {
				current = current.left;
			} else {
				break;
			}
		}
    
    return closestVal;
  }

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  }
}
