//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	var i=0;
    var j=1;
    var k;
    var stringOutput = "0 1";
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (isNaN(intCount) || intCount <2 || intCount > 100)
    {
        $("total_fib").value = " ";
        $("output").value = "Error, you just can ask to see between 2 and 100 numbers. Please, enter another number";
    }
    else
	{
        while(intCount >= 2)
        {
            k = i + j;
            i = j;
            j = k;
            stringOutput = stringOutput + " " + k;
            intCount--;
        }
        $("output").value = stringOutput;
    }

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  