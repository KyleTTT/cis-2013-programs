//Task 1

var arrayNames = new Array("John", "Robert", "Jimmy", "Bonzo");

var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage = " ";

var intCount;

for(intCount = 0; intCount < arrayNames.length; intCount++)
{
    stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] + "\n";
}
alert(stringMessage);


//Task 2

var stringTimesTable = "";

for(var x=1; x<=12; x++)
{
    for(var y=1; y<=12; y++)
    {
        stringTimesTable = stringTimesTable + " " + x*y + " ";
    }
    stringTimesTable += "\n";
}
alert(stringTimesTable);

//task 3

var stringEvenTimes = "";
var timesTable =[];

for(var a=1; a<=12; a++)
{
    timesTable[a] = [];
    for(var b = 1; b <= 12; b++)
    {
        timesTable[a][b] = a*b;
    }
    
}
alert(timesTable);

for (var i=1; i<=12; i++)
{
    if(i%2===0)
    {
        for (var j=1; j<=12; j++)
        {
            stringEvenTimes = stringEvenTimes + " " + timesTable[i][j] + " ";
        }
        stringEvenTimes += "\n";
    }
}

alert (stringEvenTimes);




