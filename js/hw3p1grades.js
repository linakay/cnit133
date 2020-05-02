function nums(){
    var hwAvg, midExam, finalExam, participation;
    hwAvg = document.forms["myform"].elements["num1"].value;
    midExam = document.forms["myform"].elements["num2"].value;
    finalExam = document.forms["myform"].elements["num3"].value;
    participation = document.forms["myform"].elements["num4"].value;
    hwAvg = parseFloat(hwAvg);
    midExam = parseFloat(midExam);
    finalExam = parseFloat(finalExam);
    participation = parseFloat(participation);
    var finalAvg;
        finalAvg = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation);
    if ((hwAvg>=0 && hwAvg<=100) && (midExam>=0 && midExam<=100) && (finalExam>=0 && finalExam<=100) && (participation>=0 && participation<=100)) {
        finalAvg = Math.round(finalAvg);
        var grd;
        if (finalAvg>=90) grd="A";
        else if (finalAvg>=80) grd="B";
        else if (finalAvg>=70) grd="C";
        else if (finalAvg>=60) grd="D – Student must retake the course";
        else grd="F – Student must retake the course";
        document.getElementById("finalGrade").innerHTML="Final Letter grade: "+grd;
        document.getElementById("result").style.color="#000";
        res="Weighted average grade: "+finalAvg.toString()+"%";
    }
    else if ((hwAvg=="") || (midExam=="") || (finalExam=="") || (participation=="") || 
            (hwAvg<0) || (midExam<0) || (finalExam<0) || (participation<0) || 
            (hwAvg>100) || (midExam>100) || (finalExam>100) || (participation>100) || 
            isNaN(hwAvg) || isNaN(midExam) || isNaN(finalExam) || isNaN(participation)) {
        res="Please enter values between 0 and 100. If the student did not earn any points, enter 0."
        document.getElementById("result").style.color="#AF231C";
        document.getElementById("finalGrade").innerHTML="";
    }
    else {
        res="Please enter values between 0 and 100. If the student did not earn any points, enter 0."
        document.getElementById("result").style.color="#AF231C";
        document.getElementById("finalGrade").innerHTML="";
    }
    document.getElementById("result").innerHTML=res;
    return res;
}