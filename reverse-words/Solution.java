class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().replaceAll(" +", " ").split(" ");
        Collections.reverse(Arrays.asList(words));
        return String.join(" ", words);
    }
}