function cnum(x){
    var x;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function forx() {
    var sum, prod;
    sum=0;
    prod=1;
    for (var i=5; i<=21;){
        sum+=i;
        prod*=i;
        i+=4;
        // console.log(sum, i);
    }
    prod = cnum(prod);
    document.getElementById('tot').innerHTML="The sum of every fourth integer from 5 through 21 inclusive is "+sum+".";
    document.getElementById('mult').innerHTML="The product of every fourth integer from 5 through 21 is "+prod+".";
    var x;
    x=document.getElementById('draggable');
    x.style.display="block";
    return prod;
}
function frst() {
    var x;
    x=document.getElementById('draggable');
    x.style.display="none";
    document.getElementById('tot').innerHTML="<br>";
    document.getElementById('mult').innerHTML="<br>";
}
function wrst() {
    document.getElementById('tot2').innerHTML="<br>";
    document.getElementById('mult2').innerHTML="<br>";
}
function whx() {
    var sum, prod, i;
    sum=0;
    prod=1;
    i=3;
    while (i<=21){
        sum+=i;
        prod*=i;
        i+=3;
        // console.log(i, sum, prod);
    }
    prod = cnum(prod);
    document.getElementById('tot2').innerHTML="The sum of every third integer from 3 through 21 inclusive is "+sum+".";
    document.getElementById('mult2').innerHTML="The product of every third integer from 3 through 21 is "+prod+".";
    return prod;
}