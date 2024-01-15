var randomNum = Math.floor(Math.random() * 10) +1;
var choose = false;
while (!choose){
    var userInput = prompt("Nhập 1 số nguyên từ 1 đến 10?");
    var value = parseInt(userInput);
    if (isNaN(value) || value < 1 || value > 10) {
        alert("Vui lòng nhập một số từ 1 đến 10.");
    }else{
        if (value === randomNum) {
            choose = true;
            alert("Congartulation" + randomNum);
        } else if (choose > randomNum) {
            alert("Vượt rồi.");
        } else {
            alert("Nhỏ rồi.");
        }
    }
}