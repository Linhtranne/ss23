var userInput = prompt("Nhập vào 1 số nguyên?");
var number = parseInt(number);
if (isNaN(number) || number <= 0) {
    console.log("Nhập sai rồi.");
} else {
    var num = 1;
    for (var i = 1; i <= number; i++) {
        num *= i;
    }
    console.log("Giai thừa của " + number + " là: " + factorial);
}