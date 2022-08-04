console.log("hey");
console.log(new Date().getDay());
let day;
switch (new Date().getDay()){    // add the case no get the day name .
    case 1:   
    day = "Sunday";
    break;

    case 2:
    day = "monday";
    break;

    case 3:
    day = "Tuesday";
    break;

    case 4:
    day = "Wednesday";
    break;

    case 5:
    day = "Thursday";
    break;
    
    case 6:
    day = "Friday";
    break;
           
    
    case 7:
    day = "Saturday";

}
document.getElementById("demo").innerHTML = "Today is "  + day;

            




