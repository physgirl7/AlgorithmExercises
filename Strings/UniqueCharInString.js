
//First Try
function areStringCharactersUnique(string){
    let arrayFromString = string.split("");
    for(let j=0; j<arrayFromString.length; j++){
        for(let i=j+1; i<arrayFromString.length; i++){
            if(arrayFromString[j] == arrayFromString[i]){
                return false;
            } 
        }  
    } return true;
}

//Using Set; Faster function than original function
function areStringCharactersUniqueUsingSet(string){
   let answer = new Set(string).size == string.length;
   return answer;
}

//Using an Object; Faster function that original function
function areStringCharactersUniqueUsingObject(string){
    let myObj = {};
    for(let i=0; i<string.length; i++){
        if(myObj[string[i]]){
            return false;
        }   myObj[string[i]] = true;
    } return true;
}

// Using Char Index to check first and last occurance in the string
function areStringCharactersUniqueByCheckingCharIndex(string){
    for(let i=0; i<string.length; i++){
        if(string.indexOf(string[i]) != string.lastIndexOf(string[i])){
            return false;
         }
    } return true;
}

console.log(areStringCharactersUnique("Hello"));
console.log(areStringCharactersUniqueUsingSet("Hello"));
console.log(areStringCharactersUniqueUsingObject("Hello"));
console.log(areStringCharactersUniqueByCheckingCharIndex("Hello"));

console.log(areStringCharactersUnique("Hi!"));
console.log(areStringCharactersUniqueUsingSet("Hi!"));
console.log(areStringCharactersUniqueUsingObject("Hi!"));
console.log(areStringCharactersUniqueByCheckingCharIndex("Hi!"));

