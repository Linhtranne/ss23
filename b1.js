var numberInput = prompt("Nhập số nguyên dương:");
var number = parseInt(numberInput);
if (isNaN(number) || number <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Các số nguyên dương từ 1 đến " + number + " là:");
    for (var i = 1; i <= number; i++) {
        console.log(i);
    }
}
