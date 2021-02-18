var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

floatAge = parseFloat(prompt("Enter your age"));

floatDays = parseFloat(floatAge*365.25).toFixed(2);
floatMonths = parseFloat(floatAge*12).toFixed(2);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14);

     alert("You are currently = " + floatAge + " years old and you are " + floatDays + " days old . \n " + " You are " + intWeeks + " weeks old \n You are " + intFortnights + " Fortnights old ");
    