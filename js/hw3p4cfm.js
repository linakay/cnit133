function gtnm() {
    var n1, n2;
    n1 = Math.floor(Math.random()*10);
    n2 = Math.floor(Math.random()*10);
    document.getElementById('num1').innerHTML=n1;
    document.getElementById('num2').innerHTML=n2;
    document.getElementById('result').innerHTML='';
    document.forms['numform'].elements['ans'].value='';
}
// function pmt() {
    // var resp;
    // resp = prompt('Do you wish to continue?');
// }
function mlt() {
    var n1, n2;
    n1 = document.getElementById('num1').innerHTML;
    n2 = document.getElementById('num2').innerHTML;
    nxn = n1*n2;
    a = document.forms['numform'].elements['ans'].value;
    console.log(n1, n2, nxn);
    a = parseFloat(a);
    correct = n1*n2;
    if (a==correct) {
        document.getElementById('result').innerHTML='Correct&#8212;very good!';
        pmt=confirm('Do you wish to continue?');
        if (pmt==True){gtnm();}
        else{return 'goodbye';}
        // pmt();
    }
    else {
        document.getElementById('result').innerHTML='No. Please try again.';
    }
    return a==correct;
}