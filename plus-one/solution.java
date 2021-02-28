class Solution {
    public int[] plusOne(int[] digits) {
        int end = digits.length - 1;
        
        if (digits[end] + 1 == 10) {
            while (end > 0 && digits[end] + 1 == 10) {
                digits[end] = 0;
                end -= 1;
            }
            
            if(digits[end] + 1 == 10) {
                digits[end] = 1;
                digits = Arrays.copyOf(digits, digits.length + 1);
                digits[digits.length - 1] = 0;
            } else {
                digits[end] = digits[end] + 1;
            }
            
            
        } else {
            digits[digits.length - 1] += 1;
        }
        
        return digits;
    }
}