//Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {

     let words = string.split(' ')
    let separated = []
    for(let i = 0; i < words.length; i++) {
    separated.push(words[i].split('').join(separator))
  }
    return separated.join(' ');
}