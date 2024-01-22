// Input: S1 = “AGGTAB”, S2 = “GXTXAYB”
// Output: 4
// Explanation: The longest subsequence is “GTAB”.

// Input: S1 = “BD”, S2 = “ABCD”
// Output: 2
// Explanation: The longest subsequence is “BD”.

  
// Recursion
// Returns length of LCS for X[0..m-1], Y[0..n-1]
function lcs(  s1,  s2 , m , n ) { 
    if (m == 0 || n == 0) 
        return 0; 
    if (s1[m-1] == s2[n-1]) 
        return 1 + lcs(s1, s2, m-1, n-1); 
    else
        return Math.max(lcs(s1, s2, m, n-1), lcs(s1, s2, m-1, n)); 
} 
 
const s1 = "AGGTAB";
const s2 = "GXTXAYB";
console.log("Length of LCS is" + " " + lcs( s1, s2, s1.length, s2.length ) ); 
// Time complexity: O(2 pow (m*n))
// Space: O(1)

// Space Optimized
function longestCommonSubsequence(text1, text2) {
    const n = text1.length;
    const m = text2.length;
 
    // Initializing two arrays of size m
    let prev = new Array(m + 1).fill(0);
    let cur = new Array(m + 1).fill(0);
 
    for (let idx1 = 1; idx1 < n + 1; idx1++) {
        for (let idx2 = 1; idx2 < m + 1; idx2++) {
            // If characters match
            if (text1[idx1 - 1] === text2[idx2 - 1]) {
                cur[idx2] = 1 + prev[idx2 - 1];
            } else {
                cur[idx2] = Math.max(cur[idx2 - 1], prev[idx2]);
            }
        }
        // Update the 'prev' array
        prev = [...cur];
    }
 
    return cur[m];
}
 
const S1 = "AGGTAB";
const S2 = "GXTXAYB";
 
// Function call
console.log("Length of LCS is " + longestCommonSubsequence(S1, S2));
// Time complexity: O(m*n)
// Space: O(2m) = O(m)
