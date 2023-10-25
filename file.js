const longestPalindromeSubstring = ( str) => {
    //check for empty string
    if( str.length < 1 || str === null ) return ""

    let longest = "" //storage for longest palindrome
    for( let i = 0; i < str.length; i++){
        //odd palindrome taking the middle (mirror point) to consideration
        oddPalindrome = expandFromCenter(str, i, i)
        //even palindrome
        evenPalindrome = expandFromCenter(str, i-1, i) //i-i reps uniqueness in the middle

        if( oddPalindrome.length > longest.length){
            longest = oddPalindrome
        }

        if( evenPalindrome.length > longest.length){
            longest = evenPalindrome
        }
    }
    return longest;
}


function expandFromCenter(str, left, right ){
    let i = 0;
    while(str[left - i] && str[left-i] === str[right + i]){
        i++
    }
    i--
    return str.slice(left - i, right + i + 1)
}

console.log(longestPalindromeSubstring("babad"))