//Solution 1

//start one variable that begins at zero
var begins = 0;

//if i is less 1000 then continue moving through numbers
for (var i = 0; i < 1000; i++){

	//if i is divisible by 3 or 5 then add i to sum
    if(i % 3 == 0 || i % 5 == 0){
    	begins += i;
    }
}

//display the variable begins in HTML by id solution1
document.getElementById('solution1').innerHTML= begins;


//Solution 2

//start with first 2 variables firstNum and secondNum 
//include a thrid variable to track the sum
var firstNum = 1;
var secondNum = 2;
var sum = 0;

//it loops while firstNum is less than 4 million
while( firstNum < 4000000) {

//if firstNum is even, add it to the sum
    if( firstNum % 2 === 0){
        sum += firstNum;
    }
    
//create a new variable "thirdNum" that holds the sum of firstNum and secondNum
//then finally update firstNum and secondNum as they keep adding
    var thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
}

//display the variable sum in HTML by id solution2
document.getElementById('solution2').innerHTML= sum;