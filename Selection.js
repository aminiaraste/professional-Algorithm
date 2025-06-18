function Sort (arr){
    for(let i =0 ; i<arr.length ; i++){
        let temp =arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp =arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                
            }
        }
        
    }
    console.log(arr);
}

Sort([2,33,4,55,6,7])