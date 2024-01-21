
//Simple validation of a username with regex

function validateUsr(username) {
const validator =  /^[a-z_0-9]{4,16}$/;

  return validator.test(username);
}