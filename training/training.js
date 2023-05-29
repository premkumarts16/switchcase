var readlineSync = require("readline-sync");
let x = readlineSync.question(" enter day  :  ");
x=parseInt(x)

switch (x) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("indalid entry");
}
