// format numbers with two decimals
function fnum(x) {
    var x;
    x = Math.round(x*100);
    x = x/100;
    x = x.toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calcqty() {
    var q1, q2, q3, q4;
    q1 = document.forms["calcinput"].elements["qty1"].value;
    q2 = document.forms["calcinput"].elements["qty2"].value;
    q3 = document.forms["calcinput"].elements["qty3"].value;
    q4 = document.forms["calcinput"].elements["qty4"].value;
    q1 = parseFloat(q1);
    q2 = parseFloat(q2);
    q3 = parseFloat(q3);
    q4 = parseFloat(q4);
    // tot = q1+q2+q3+q4;
    if (document.forms["calcinput"].elements["spname"].value==""){
        document.getElementById("sperr").innerHTML="Please enter the salesperson's name";
    }
    else {
        document.getElementById("sperr").innerHTML="<br>";
    }
    if ((q1%1==0) && (q2%1==0) && (q3%1==0) && (q4%1==0) && (q1 >= 0) && (q2 >= 0) && (q3 >= 0) && (q4 >= 0)) {
        document.getElementById("result").innerHTML="<br>";
        document.forms["calcinput"].elements["num1"].value=q1;
        document.forms["calcinput"].elements["num2"].value=q2;
        document.forms["calcinput"].elements["num3"].value=q3;
        document.forms["calcinput"].elements["num4"].value=q4;
        var t1, t2, t3, t4;
        t1 = q1*239.99;
        t2 = q2*129.75;
        t3 = q3*99.95;
        t4 = q4*350.89;
        f1 = "$ "+ fnum(t1);
        f2 = fnum(t2);
        f3 = fnum(t3);
        f4 = fnum(t4);
        document.forms["calcinput"].elements["tot1"].value=f1;
        document.forms["calcinput"].elements["tot2"].value=f2;
        document.forms["calcinput"].elements["tot3"].value=f3;
        document.forms["calcinput"].elements["tot4"].value=f4;
        sum = t1 + t2 + t3 + t4;
        fsum = "$ "+fnum(sum);
        document.getElementById("totsold").innerHTML=fsum;
        coms = sum*0.09;
        comp = 200+coms;
        fcomp = fnum(comp);
        document.getElementById("compensation").innerHTML=fcomp;
        return comp;
    }
    else {
        document.getElementById('result').innerHTML="Please enter positive integers. If no items were sold, enter 0.";
    }   
}
function calcrst(){
    document.getElementById("sperr").innerHTML="<br>";
    document.getElementById("result").innerHTML="<br>";
    document.getElementById("totsold").innerHTML="<br>";
    document.getElementById("compensation").innerHTML="<br>";
}