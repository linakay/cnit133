function FtoC(){
    var f;
    f = document.forms["tmp"].elements["celfah"].value;
    f = parseFloat(f);
    if (f < -459.67) {
        document.forms["tmp"].elements["result"].value="Enter a valid temperature.";
    }
    else if (isFinite(f)) {
        c = (5/9)*(f-32);
        c = Math.round(c);
        cels="Fahrenheit to Celsius: "+f+"°F = "+c+"°C";
        document.forms["tmp"].elements["result"].value=cels;
        return c;
    }
    else {
        document.forms["tmp"].elements["result"].value="Error: Enter numeric values.";
    }
}
function CtoF(){
    var c;
    c = document.forms["tmp"].elements["celfah"].value;
    c = parseFloat(c);
    if (c < -273.15) {
        document.forms["tmp"].elements["result"].value="Enter a valid temperature.";
    }
    else if (isFinite(c)) {
        f = c*(9/5)+32;
        f = Math.round(f);
        fahs="Celsius to Fahrenheit: "+c+"°C = "+f+"°F"
        document.forms["tmp"].elements["result"].value=fahs;
        return f;
    }
    else {
        document.forms["tmp"].elements["result"].value="Error: Enter numeric values.";
    }
}