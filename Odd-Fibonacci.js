function sumFibs(num) {
    let x = 1;
    let y =1;
    let sum =2;
    for(let i =1 ; i<=num ;i++){
        let mynum = x +y;
        if (mynum > num) break;
        if(mynum%2 !=0){
            sum += mynum;
        }
        x =y;
        y=mynum;
    }
    console.log(sum);
}
sumFibs(4);


//function/fibunacci=0, 1, 1, 2, 3, 5, 8, 13 
//0+1=1 1+1=2 2+1=3 3+2 =5
