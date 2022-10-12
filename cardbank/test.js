let openbrack = 0;
let closebrack = 0;
let opencurl = 0;
let closecurl = 0;
let opensqr = 0;
let closesqr = 0;
let start = 0;
let end = 0;
let valid = null;
for(let i = 1; i < s.length; s++) {
    //Test for paire bracket
    if(s[i] == "(")
        openbrack++;
    if(s[i] == ")")
        closebrack++;
    if(s[i] == "{")
        opencurl++;
    if(s[i] =="}")
        closecurl++;
    if(s[i] == "[")
        opensqr++;
    if(s[i] == "]");
        closesqr++;
}

if((openbrack != closebrack) || (opencurl != closecurl) || (opensqr != closesqr)) {
    valid = "invalid";
}
else {
    for(let i = 1; i < s.length; s++) {
        start++;
        if(s[i])
    }
}