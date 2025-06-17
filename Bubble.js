function Bubble( arr){
    for(let i =0; i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
        }
    }
    console.log(arr)
}

Bubble([7,5,2,4,3,9]);