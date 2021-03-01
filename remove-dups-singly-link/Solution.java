/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode current = head;
        
        if(head == null)
            return head;
        
        while(current.next != null) {
            if(current.next.val == current.val) {
                ListNode dupCurrent = current.next;
                while(true) {
                    if(dupCurrent.next != null && dupCurrent.next.val == current.val) {
                        dupCurrent = dupCurrent.next;
                    } else {
                        current.next = dupCurrent.next;
                        break;
                    }          
                }
            }
            
            if (current.next != null)
                current = current.next;
        }
        
        return head;
    }
}