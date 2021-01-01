// import { isNationalIDValid } from './Utils.js'

const isNationalIDValid = require("./Utils.js");
const codelist = ['0327995289','0481080198','0138743193','0467754438','0899501011','0327098783','0220998019','0651763010','0169181431',
'0332167615','0207238707','0671215191','0466981708','0781192323','0011717939','0877125449','0116707216']
                   
describe("code_meli_verify", function() {
    // Define here the individual tests
    test("Should add code_meli and return result", function() {
        for (i in codelist){
                expect(isNationalIDValid(i)).toBe(true);
        }
      });
  });