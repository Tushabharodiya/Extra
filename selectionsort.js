let arr = [13, 4, 8, 6, 2]
let min;

for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
        if (min) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);

