// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str){
  return str.toUpperCase().replace(/\w\b/g, a=>a.toLowerCase())
  
}