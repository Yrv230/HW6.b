function vowels (str) {
    let letters = 'аоеуюияыАОЕУЮИЯЫ'
    let count = 0

    // lettes = letters.split('')
    // console.log(str);
    // str = str.split('')

    // for (let i = 0; i < letters.length; i++) {
    //     for (let j = 0; j < str.length; j++) {
    //         if (str[j] == letters[i]) {
    //             count++
    //         }
    //     }
    // }

    for(let i = 0; i < str.length; i++) {
        if (letters.indexOf(str[i]) !== -1) {
            count++
        }
    }
    
    console.log(count);
    return count
}