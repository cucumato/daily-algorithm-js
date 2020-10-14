/**
 * LeetCode (Medium) - Remove Nth Node From End of List
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head==null || n<=0) return head;

    let first = second = dummy = new ListNode(0, head);

    while (n >= 0 && first != null) {
        first = first.next;
        n--;
    }

    if (n >= 0) return head;

    while (first != null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
};
// Time complexity: O(n), Space complexity: O(1)