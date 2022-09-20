function countNumber(numbers, value) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (value == numbers[i]) {
            count++;
        }
        else {
            console.log('khong co');
        }
    }
    return count;
}
console.log(countNumber([1, 2, 3, 1, 1, 5, 6], 1));
