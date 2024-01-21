
//Regex validate PIN code

function validatePIN (pin) {
  return /^\d{4}(\d\d)?$/.test(pin)
}