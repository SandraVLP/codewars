// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

function topSecret(str){
   let res="",a;
    for(i=0; i<str.length; i++){
        a=str[i].charCodeAt();
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(str[i]) !==-1 ){
            a=a-3;
            if (a<65 || (a<97 & a>91)) { a+=26 };
        }
        res+=String.fromCharCode(a);
    }
    return res;
  
}
//question1: The top secret file number is...
answer1="2882";
//question2: Super agent's name is...
answer2="UwKOAb";
//question3: He stole the treasure is...
answer3="Barbie doll";