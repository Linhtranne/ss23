let num =+ parseInt(prompt("Nhập:"));
if (num > 0) {
    let i = 1;
    while (i <= num) {
        let j = 1;
        while (j <= i) {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i++;
    }
    i = num;
    while (i >= 1) {
        var j = 1;
        while (j <= i) {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i--;
    }
} else {
    document.write("Nhập sai rồi.");
}