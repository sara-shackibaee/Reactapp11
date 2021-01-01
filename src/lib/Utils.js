// import {codelist} from './Codemelilist.test.js'
// let tempList = codelist
// // .filter(code=>code===10)
// .map(code=>{
//     console.log(code)
//     return code
// })

// console.log(tempList)

module.exports =function isNationalIDValid (mycode) {
    // console.log("mycode is:",mycode)
    let testmelicode = [1111111111,2222222222,3333333333,4444444444,5555555555,6666666666,7777777777,8888888888,9999999999]
    let lenOfNationalID = mycode.length;
    let lastCharacter = parseInt(mycode.charAt(9));
    // console.log("c is:",c)
    let n = parseInt(mycode.charAt(0))*10 + parseInt(mycode.charAt(1))*9 + parseInt(mycode.charAt(2))*8 + parseInt(mycode.charAt(3))*7 +parseInt(mycode.charAt(4))*6 + parseInt(mycode.charAt(5))*5 + parseInt(mycode.charAt(6))*4 + parseInt(mycode.charAt(7))*3 + parseInt(mycode.charAt(8))*2
    // console.log("n is:",n)
    // let r = n - parseInt(n/11)*11;
    let reminder = n%11;


    // console.log("r is:",r)
    if (lenOfNationalID<10 ) {
        return false
    }
    else
        for (let i = 0; i < testmelicode.length; i++) {
            if (testmelicode[i] == mycode) {
               // console.log ("****your meli_code  is incorrect**** ")
               console.log(testmelicode)
                return false
            }
        }
            
                if ((reminder === 0 && reminder === lastCharacter) || (reminder === 1 && lastCharacter === 1) || (reminder > 1 && lastCharacter === 11 - reminder))
                    {
                      //  console.log('success');
                        return true

                    }
                else
                    {
                    console.log('****your meli_code  is incorrect****');
                    return false
                    }


        

}