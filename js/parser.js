function parser(frm, x){
    var num;
    num = document.forms[frm].elements[x].value;
    num = parseFloat(num);
    return num;
}