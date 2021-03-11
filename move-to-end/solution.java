import java.util.*;

class Program {
  public static List<Integer> moveElementToEnd(List<Integer> array, int toMove) {
    int i = 0;
		int end = array.size() - 1;
		
		while(i < end) {
			if(array.get(i) == toMove) {
				array.add(array.remove(i));
				end--;
			} else {
				i++;
			}
		}
		
    return array;
  }
}
