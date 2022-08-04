const number = prompt("enter a number");
let ans;
if(number%2==0){
     ans = "the no is even";
}
else{
    ans = "The no is odd";
}

document.getElementById("demo1").innerHTML =  ans;



