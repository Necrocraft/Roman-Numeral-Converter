function convertToRoman(num) {
    let romanValue = "";
    let decimalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i < decimalArr.length; i++) {
        while (decimalArr[i] <= num) {
            romanValue += romanArr[i];
            num -= decimalArr[i];
        }
    }

    console.log(romanValue);
    return romanValue;
}