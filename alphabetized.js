
//Alphabetized

function alphabetized(s) {
   var abc="";
 for (var i=97; i<123; ++i)
   for (var j=0; j<s.length; j++)
     if (s[j].toLowerCase().charCodeAt()==i)
     abc+=s[j]
 return abc
}