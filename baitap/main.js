function myfunction() {
  var a = document.querySelector("#number1").value;
  var b = document.querySelector("#number2").value;
  var number = [];
  var  primeNumbers=[]
  var primeSum = 0;
  for (var i = a; i <= b; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
      primeSum += i;
    }
  }
  document.querySelector("#number").innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + number.join(", ");
  document.querySelector("#result").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeSum;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
isPrime(number)

//bai 2 


let sodong=4;
function numberOneTriangle(a)
{
    for (let i = 0;i<=sodong;i++)
    {
        for(let j =0;j<i;j++)
        {
            document.writeln("*")
        }
        document.writeln("<br/>")
    }
    
}
numberOneTriangle(sodong)

  
