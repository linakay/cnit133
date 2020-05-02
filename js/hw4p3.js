function prntbx(){
    document.getElementById('draggable').style.display='block';
    var xvals, yvals, xstr, boxstr;
    xvals = document.forms["numform"].elements["lng"].value;
    xvals = parseFloat(xvals);
    yvals = xvals-1;
    xstr = "*";
    boxstr = "";
    if (xvals>=2 && xvals<=10 && xvals%1==0) {
        for(var i=1; i<yvals; i++){
            xstr+="*";
        }
        xstr+="*";
        boxstr += xstr;
        boxstr +="<br>";
        var ystr = "*";
        var spc = "&nbsp;";
        for(var i=1; i<yvals; i++){
            ystr+=spc;
        }
        ystr+="*";
        for(var j=1; j<yvals; j++){
            boxstr+=ystr;
            boxstr+="<br>";
        }
        boxstr+=xstr;
        // document.getElementById('draggable').style.display='block';
        x=document.getElementById("box");
        x.className="bx";
        x.innerHTML=boxstr;
        // document.getElementById('dragmsg').style.display='block';
    }
    else {
        // document.getElementById('draggable').style.display='block';
        x=document.getElementById("box");
        x.className=('err');
        x.innerHTML="Please enter integer values between 2 and 10.";
        // document.getElementById('dragmsg').style.display='none';
    }
    // return boxstr;
}