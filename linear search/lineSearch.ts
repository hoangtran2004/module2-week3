function findItemMiss(data: number[]) {
    let arr: number[] = []
    for (let i = 1; i <= 10; i++) {
        if (data.indexOf(i) == -1) {
            arr.push(i)
        }
    }return arr
}

console.log(findItemMiss([1,2,4,6]))