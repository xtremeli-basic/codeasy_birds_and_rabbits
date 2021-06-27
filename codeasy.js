/*  if    x = birds  and  y = rabbits, mathematically:
feet:       2x + 4y = 38;
heads:    x + y = 16;
    Note: both are less than or equal to 16 because they each have one head
*/
//Declaring variables
var i;  var j;  var feet;  var heads;
//Creating nested loops
for (i=0; i<=16; i++){
    for (j=0; j<=16; j++){
//Formula for feet
        feet = (2 * i) + (4 * j);
//Formula for head
        heads = i + j;
        if(feet ==  38 & heads == 16){
            
            console.log("number of birds is" + " " + i);
        }
    }
}