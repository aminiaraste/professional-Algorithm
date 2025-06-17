
function magic(myarr){
    let x = 0;
    for(let i=0 ;i<myarr.length;i++){
        var sum = 0;
        var sum2=0;
        for(let j=0;j<myarr[i].length;j++){
            sum += myarr[i][j];
            sum2 +=myarr[j][i];
            
        }
        if(x == 0){
            x = sum;
        }
        if(x !=sum || x!=sum2){
            return false;
        }
        let di1 = myarr[0][0]+myarr[1][1]+myarr[2][2];
        let di2 = myarr[0][2]+myarr[1][1]+myarr[2][0];
        if(x !=di1 || x!=di2){
            return false;
        }
        
    }
    return true;
}
myarr=[[3, 5, 7], [8, 1, 6], [4, 9, 1] ]
console.log(magic(myarr))