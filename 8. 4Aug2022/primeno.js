
function myFn(){
    let n1 = document.getElementById("n1").Value;
  n1 = Number(n1);
  let flag = true;
  if(!isNaN(n1)){
    for(!isNaN(n1)){
        for(let i=2;i<=n1/2;i++){
            if(n1 %i==0){
                flag = false;
                break;
            }
        }
        if(flag){
            alert("prime no");
        }
        else{
            alert("not a prime");
        }  
        }
    }
  }
