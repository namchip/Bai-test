function longest_Stirng(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
let arr = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'] 
console.log(longest_Stirng(arr);
