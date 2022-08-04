var arr  = [25,76,98,76,84];
var max = arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    document.getElementById("demo3").innerHTML = max;
}