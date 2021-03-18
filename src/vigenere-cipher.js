const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toLowerCase();
    key = key.toLowerCase();

    let arrMessageNums = [];
    let arrKeyNums =[];
    let FinalwordNums = [];
    for (let i = 0, b = 0; i < message.length; i++, b++) {
      if(/[a-z]/i.test(message[i])){
        arrMessageNums.push(message[i].charCodeAt(0)-97);      
      }else{
        arrMessageNums.push(message[i]);
      }
      if(b >= key.length){
        b = 0;
      }

      if(/[a-z]/i.test(message[i])){
        arrKeyNums.push(key[b].charCodeAt(0)-97);
        
      }else{
        arrKeyNums.push(message[i]);
        b -= 1;
      }
    }
    
    for (let i = 0; i < arrMessageNums.length; i++) {
      let char1 = arrMessageNums[i];
      let char2 = arrKeyNums[i];
    
      if(/[a-z]/i.test(message[i])){
        FinalwordNums.push(String.fromCharCode(((char1 + char2) % 26)+97));
        
      }else{
        FinalwordNums.push(message[i]);
      }
    }
    // return FinalwordNums.join("").toUpperCase();
    
    return this.direct ? FinalwordNums.join("").toUpperCase() :  FinalwordNums.reverse().join("").toUpperCase();   
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toLowerCase();
    key = key.toLowerCase();
    
    let arrMessageNums = [];
    let arrKeyNums =[];
    let FinalwordNums = [];
    for (let i = 0, b = 0; i < message.length; i++, b++) {
      if(/[a-z]/i.test(message[i])){
        arrMessageNums.push(message[i].charCodeAt(0)-97);      
      }else{
        arrMessageNums.push(message[i]);
      }

      if(b >= key.length){
        b = 0;
      }

      if(/[a-z]/i.test(message[i])){
        arrKeyNums.push(key[b].charCodeAt(0)-97);
        
      }else{
        arrKeyNums.push(message[i]);
        b -= 1;
      }
    }
    // console.log(arrMessageNums);
    // console.log(arrKeyNums);
    
    for (let i = 0; i < arrMessageNums.length; i++) {
      let char1 = arrMessageNums[i];
      let char2 = arrKeyNums[i];
      // console.log(char1,char2);
    
      if(/[a-z]/i.test(message[i])){
        FinalwordNums.push(String.fromCharCode((((char1 + 26) - char2) % 26)+97));
      }else{
        FinalwordNums.push(message[i]);
        
      }
    }
    return this.direct ? FinalwordNums.join("").toUpperCase() :  FinalwordNums.reverse().join("").toUpperCase();
    
  }
}

module.exports = VigenereCipheringMachine;
