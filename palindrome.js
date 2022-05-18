function isPalindrome(word) {
    for (let index = 0; index < word.length / 2; index++) {
        var indexAwal = index;
        var indexAkhir = (word.length - index - 1);
        
        if (indexAwal === indexAkhir) {
            return true;
        }
        
    }

    return false;
}

console.log(isPalindrome("wkwkwkw"));