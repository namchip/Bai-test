function alternatingSums(a) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            sum1+=a[i]
        }
        else{
            sum2 += a[i]
        }
    }
    let arr = [];
    arr.push(sum1);
    arr.push(sum2);
    return arr;
}
