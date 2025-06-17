function myReplace(str, before, after) {
    if(before[0]===before[0].toUpperCase()){
        after = after[0].toUpperCase()+after.slice(1);
    }
    let myArray = str.split(" ");
    for(let i=0;i<myArray.length; i++){
        if(myArray[i]==before){
            myArray[i]=after;
        }
    }
        
    return myArray.join(" ");
    
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))