function find() {
    var count, orgkey, key, org;
    count=0;
    orgkey=document.getElementById('key').value;
    key=orgkey.toLowerCase();
    org=document.forms['myform'].elements['org'].value;
    org=org.toLowerCase();
    // var mywin = window.open("", "MsgWindow", "width=300,height=100");
    if (key.length!=1 || org.length<1) {
        var mywin = window.open("", "MsgWindow", "top=500,left=500,width=300,height=100");
        document.forms['myform'].elements['output'].value="";
        mywin.document.write('<p>Please enter a single character for the key and a string for the search text.</p>');
    }
    else{
        key=key.charAt(0);
        for ( i=0; i < org.length; i++ ) {
            ltr = org.charAt(i);
            console.log(i, ltr);
            if (ltr==key){
                count++;
            }
        }
        if (count>=1) {
            var ans = "The character \"" + orgkey + "\"" + " appears in the original text " + count + " times."
            document.forms['myform'].elements['output'].value=ans;
        }
        else {
            document.forms['myform'].elements['output'].value="";
            var mywin = window.open("", "MsgWindow", "top=750,left=900,width=300,height=100");
            var err = "<p>" + "Search character " + "\"" + orgkey + "\"" + " not found in text string!</p>";
            // mywin.document.write('<p>Search character not found in text string!</p>');
            mywin.document.write(err);
        }
    }
}