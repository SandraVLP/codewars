//Vowel Count

function getCount(str) {
  return ( str.match(/[aoieu]/gi)  || [] ).length;

}