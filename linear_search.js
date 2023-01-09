//input size: n
let arr= [90, 8, 80, 76, 11, 22, 30, 33];
let search_key=3367, found=0; 

function linear_search(){
for(let i=0; i<arr.length; i++)
{
    if(search_key== arr[i])
    {
        console.log("Element found at position: "+i);
        found=1;
        break;
    }  
}    //time complexity O(n)
  if(found==0)  
  console.log("Element not found");
}
linear_search();

function reverse()
{
    let rev_aar=[];
    for(i= arr.length-1; i>=0; i-- )
    rev_aar.push(arr[i]);
    console.log("Reversed array "+rev_aar);
}
reverse();

function odd_even()
{
    let odd=[],even=[];
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        even.push(arr[i]);
        else
        odd.push(arr[i]);
    }
    console.log("Even"+even);
    console.log("odd"+odd);
}
odd_even();

function prime(n) //54 1 2 3 6 8 18 54/2=27 , 120 1 2 3 4 5 6 10 12 
{   let count=0;
    for(i=1; i<=n/2; i++)  //54 , 27
    {
        if(n%i==0)
        {
            count++; 
            if(count>1)
            break;
        }
    } // O(n/2)
    if(count>1)
    console.log("Number is not prime");
    else
    console.log("number is prime");
}
prime(31);
prime(120); 

/*given an array, find our how many prime numbers does the array
contain? input - array , output - count of prime numbers
*/

