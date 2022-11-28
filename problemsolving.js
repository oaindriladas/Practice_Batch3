/* factorial of a number
input = 5 (n); output = 120; 1*2*3*4*5
for loop
Recursion
5 * 4 * 3 *2 * 1
n * n-1 * n-2 * n-3 * n-4 (left with zero)
5 * factorial(4) 5*24
    4 * factorial(3) 4*6
        3 * factorial(2) 3*2
            2 * factorial(1) 2*1
                1 * factorial(0) =1 (sub problem) */

/* function fact(n)
{
  if (n==0)
  { return 1; } 
  else  
  {
   return n * fact(n-1); 
  }
}
var res = fact(5);
console.log("factorial of 5 : "+res);
var n = prompt("enter a number");
console.log("factorial of "+n+" "+fact(n));  //check on Speedhire, get the input from the user

function fun(num)
{
    let res =1;
    for( var i=1; i<=num; i++)
    {
        res *=i;
    }
    console.log("Factorial of "+num+" is: "+res);
}
fun(6);
/* fibonacci series: 0 1 1 2 3 5 8 13 21 34 55
t1=0, t2=1, t3 =1, t4=2

t3 = t2 + t1;
t4 = t3 + t2;
t5 = t4 + t3; n=5
fibo(5) = fibo(4) + fibo(3);  
var arr = [];
 function fibo(n){
    if (n==0)
    return 0;
        else if(n==1)
              return 1;
                else
                    return fibo(n-1) + fibo(n-2);
 }  
console.log("output of fibo: "+fibo(5));     
for(i=0; i<=5; i++)
{
    var r = fibo(i);
    console.log(r);
} 
 check if a number is prime
13 = 1*13;
print prime numbers between 1-30
*/
function prime(num)
{
    let flag=0;
    if(num ==1)
    console.log("1 is a unique number");
    else{
        for(var j=2; j<=num/2; j++)
        {
            if(num%j ==0)
           { 
            console.log("number is not prime");
            flag=1;
            break; }
        }
        if(flag==0)
        console.log("number is prime");
    } 
}
prime(13);
prime(9);
prime(29);
prime(11);

function print_prime(n)
{   //print first 10 prime numbers
    let count=1, i=3;
    let arr=[2];
    while(count<n)
    {   var temp=0;
        for(let j =2;j<=i/2; j++)
        {
            if(i%j==0)
            {  temp=1; }  
        }
        if(temp==0)
        {
        arr.push(i);
        count++;
        }
        i++;
    }
    console.log(arr);
}
print_prime(10);
/*
*
* *
* * *

a[0][0]
a[1][0] a[1][1]
a[2][0] a[2][1] a[2][2]*/

function matrix_2d()
{
    for(let a=0; a<3; a++)
    {
        for(let b=0; b<3; b++)
        {
            if(b<=a)
            document.write(" * ");
        }
        document.write("<br>");
    }
}
matrix_2d();

var date = new Date(); 2022/01/01 //substring
                       2022/04/04 //sorting dates
function arr_reverse()
{
    var ar = [90, 98, 97, 96, 95];
    for(let i=ar.length-1; i>=0;i--)
    {
        console.log(ar[i]);
    }
}
arr_reverse();
//Gagandeep's code
/* function matrix_2d(){
	for(let i=0;i<4;i++){
    for(let k=0;k<i;k++){
     document.write("*"); 
    } //n
     for( let j=i+1;j<3;j++){
        document.write(" ")
    } 
    document.write("<br>")
	}
}
matrix_2d(); */