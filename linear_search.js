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

