function countNumber(numbers: number[], value: number): number {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (value == numbers[i]) {
            count++;
        }
    }
    return count
}

console.log(countNumber([1, 2, 3, 1, 1, 5, 6], 1))
