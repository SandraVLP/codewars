// Training JS #21: Methods of String object--trim() and the string template

const fiveLine = s =>  [1,2,3,4,5].map( n => s.trim().repeat(n))
                       .join(`\n`)