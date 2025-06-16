function game(number){
    let mynumber=number%3;
    if(mynumber ===0){
        console.log(`${number} 0`)
    }else if(mynumber!==0){
        number+=1;
        if((number%3)==0){
            console.log(`${number-1} +1`)
        }else{
            number =number-2;
            if((number%3)==0){
                console.log(`${number+1} -1`)
            }
        }
    }
}
game(100)
game(4)
game(33)
game(11)
game(16)
