function bubbleSort(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length-1 ; j++) {
            if (arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }return arr
}
let arr=[1,6,4,2,7]
console.log(bubbleSort(arr))