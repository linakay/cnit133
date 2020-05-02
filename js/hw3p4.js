function gtnm() {
    var n1, n2;
    n1 = Math.floor(Math.random()*10);
    n2 = Math.floor(Math.random()*10);
    document.getElementById('num1').innerHTML=n1;
    document.getElementById('num2').innerHTML=n2;
    document.forms['numform'].elements['ans'].value='';
    document.getElementById('result').innerHTML='';
    document.getElementById('getnum').style.display="none";
    document.getElementById('conf').style.display="none";
    document.getElementById('stp').style.display="none";
}
function mlt() {
    var n1, n2;
    n1 = document.getElementById('num1').innerHTML;
    n2 = document.getElementById('num2').innerHTML;
    nxn = n1*n2;
    anum = document.forms['numform'].elements['ans'].value;
    // console.log(n1, n2, nxn);
    anum = parseFloat(anum);
    correct = n1*n2;
    // document.forms['numform'].elements['ans'].value="";
    if (anum==correct) {
        document.getElementById('result').innerHTML='Very good!';
        document.forms['numform'].elements['ans'].value='';
        document.getElementById('getnum').style.display="inline";
        document.getElementById('conf').style.display="inline";
        document.getElementById('stp').style.display="inline";
    }
    else {
        document.getElementById('result').innerHTML='No. Please try again.';
        document.forms['numform'].elements['ans'].value='';
        document.getElementById('getnum').style.display="none";
        document.getElementById('conf').style.display="none";
        document.getElementById('stp').style.display="none";
    }
}
function gbye() {
    document.forms['numform'].elements['ans'].value='';
    document.getElementById('result').innerHTML='';
    document.getElementById('getnum').style.display="none";
    document.getElementById('conf').style.display="none";
    document.getElementById('stp').style.display="none";
    // document.getElementById('conf').innerHTML='Goodbye!';
}
/*function pmt() {
    var resp = confirm('Very good! Do you wish to continue?');
    if (resp==true) {
        document.getElementById('result').innerHTML='Very good!';
        gtnm();
    }
    else {
        document.forms['numform'].elements['ans'].value='';
        document.getElementById('result').innerHTML='';
        document.getElementById('getnum').style.display="none";
        document.getElementById('conf').style.display="none";
        document.getElementById('stp').style.display="none";
    }
}*/