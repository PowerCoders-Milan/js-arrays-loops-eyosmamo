// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random() * 10);
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
}



console.log(maxNumber);