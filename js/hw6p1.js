function calc() {
    var num, dec, decs;
    num = document.forms["myform"].elements["num0"].value;
    dec = num.split(".");
    decs = dec[1];
    num = parseFloat(num);
    if (isNaN(num) || decs.length<4 ) {
        document.forms["myform"].elements["output"].value="Please enter a floating point number with at least four decimal places."
    }
    else {
        rnd = Math.round(num);
        sqt = Math.sqrt(num);
        sqt = Math.round(sqt);
        flr = Math.floor(num);
        fx1 = num.toFixed(1);
        fx2 = num.toFixed(2);
        fx3 = num.toFixed(3);
        ans = "You entered " + num + "." + "\n" +
        "The rounded square root of " + num + " is " + sqt + "." + "\n" +
        num + " rounded to the nearest:" + "\n" +
        " – integer using math round is " + rnd + ", \n" +
        " – integer using math floor is " + flr + ", \n" +
        " – tenth using toFixed is " + fx1 + ", \n" +
        " – hundredth using toFixed is " + fx2 + ", and \n" +
        " – thousandth using toFixed is " + fx3 + ".";
        document.forms["myform"].elements["output"].value=ans;
    }
}