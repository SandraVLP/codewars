//Validate Passwords

const passwords=[]
var signIn = function(password) {
 passwords.push(password)
 
};
var logIn = function(password) {
  return !!passwords.find(v=>v===password)
};