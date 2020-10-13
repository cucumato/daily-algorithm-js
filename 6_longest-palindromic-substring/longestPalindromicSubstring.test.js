const lps = require('./longestPalindromicSubstring');

test('Leetcode Test 1', () => {
    expect(lps("babad")).toBe('aba');
});
test('Leetcode Test 2', () => {
    expect(lps("cbbd")).toBe('bb');
});
test('Leetcode Test 3', () => {
    expect(lps("a")).toBe('a');
});
test('Leetcode Test 4', () => {
    // Leetcode says "c" is also a valid answer.
    expect(lps("ac")).toBe('c');
});

test('Custom Test 1', () => {
    expect(lps('sqwwqsabcbasaaabba')).toBe('sabcbas');
})
test('Custom Test 2', () => {
    expect(lps('basqwwqsabcbasasabba')).toBe('basqwwqsab');
})
test('Custom Test 3', () => {
    expect(lps('abbaqsabasqwwqsab')).toBe('basqwwqsab');
})