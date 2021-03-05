class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int num : nums) {
            if(map.containsKey(num))
                map.put(num, map.get(num) + 1);
            else
                map.put(num, 1);
        }
        
        int largest = 0;
        int l = 0;
        
        for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if(entry.getValue() > largest) {
                l = entry.getKey();
                largest = entry.getValue();
            }   
        }
        
        return l;
    }
}