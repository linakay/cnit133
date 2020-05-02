function cmp(rt) {
    var pbal=1000;
    for (var n = 1; n <= 10; n++) {
        pbal*=(1+rt);
        console.log(n, pbal);
    }
    return pbal
}
function prt(pv, rt) {
    var pv, t;
    pv=1000;
    tbl = document.createElement('table');
    for (var n=1; n<=10; n++){
        pv*=(1+rt);
        var r, c;
        // r = document.createElement('tr');
        r = t.insertRow(i);
        c = r.insertCell(0);
        c.innerHTML=n;
        c = r.insertCell(1);
        c.innerHTML=pv;
        c = r.insertCell(2);
        c.innerHTML=rt;
        document.getElementById('addtable').appendChild(t);
    }
}

function createtbl() {
    // var c, r, t;
    t = document.createElement('table');
    r = t.insertRow(i);
    c = r.insertCell(j);
    c.innerHTML = prt(pv);
}