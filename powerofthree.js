//Objective is to see if a number is a power of 3

let n = 27


//O(1) solution that uses math to derive the answer

//In our case, x = 3 ^ i
//i = log3(x)
//i = log10(x) / log10(3)
//'% 1' is to check if the decimal is 0
return (Math.log10(n) / Math.log10(3)) % 1 == 0