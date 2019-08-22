function findAllPermutations(string) {

    //end condition for recursion
    if (string.length <= 1) {
        return [string]
    }

    let perms = []

    for (let i = 0; i < string.length; i++) {

        let currentStartChar = string[i]
        let remainingChars = string.slice(0,i) + string.slice(i + 1)


        let subPermsOfRemainingChars = findAllPermutations(remainingChars)


        subPermsOfRemainingChars.forEach(subPerms => {
            perms.push(currentStartChar + subPerms)
        });


    }

    return perms
}

abc =  findAllPermutations('abc')
console.log(abc)
alphabet =  findAllPermutations('abcdefg') //hijklmnopqrstuvwxyz')
console.log(alphabet)
