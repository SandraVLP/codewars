
//Simple validation of a username with regex

function validateUsr(username) {
  const regexp_validator =  /^[a-z_0-9]{4,16}$/;

  return regexp_validator.test(username);
}