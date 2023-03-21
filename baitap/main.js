let so1 = document.getElementById("number1").value;
let so2 = document.getElementById("number2").value;
let num=3;
let sum = 0;
// function isPrime(num) {
//     // Trường hợp đặc biệt
//     if (num <= 1) {
//       return false;
//     }
  
//     // Kiểm tra nếu num là 2 hoặc 3
//     if (num === 2 || num === 3) {
//       return true;
//     }
  
//     // Kiểm tra nếu num là một số chẵn
//     if (num % 2 === 0) {
//       return false;
//     }
  
//     // Lặp từ 3 đến căn bậc hai của num và kiểm tra các số lẻ trong đó
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  function myfunction(a, b) {
    
  
    // Lặp qua các số từ a đến b và kiểm tra xem chúng có phải là số nguyên tố hay không
    for (let i = so1; i <= so2; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    return sum;
  }

isPrime(num)
myfunction(so1,so2)
document.writeln(sum)
// sumOfPrimesInRange(so1,so2)
console.log("tong cac so nguyen to trong khoang tu a den b la : " +sum )

//bai 2 


let sodong=4;
function numberOneTriangle(a)
{
    for (let i = 0;i<sodong;i++)
    {
        for(let j =0;j<i;j++)
        {
            document.writeln("*")
        }
        document.writeln("<br/>")
    }
    
}
numberOneTriangle(sodong)

  
