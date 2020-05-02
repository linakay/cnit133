function fnum(){
  var x;
  x = document.forms["myform"].elements["num"].value;
  x = parseFloat(x);
  x = Math.round(x*100)/100;
  x = x.toFixed(2);
  x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // document.getElementById("pn").innerHTML=x;
  return x
}