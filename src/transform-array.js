const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--double-next") {
        if(arr.length-1 > arr.indexOf(arr[i])){          
          transformArr.push(arr[i+1]);          
        }   
        
      }else if(arr[i] == "--double-prev"){
        if(arr.indexOf(arr[i]) != 0){          
          transformArr.push(arr[i-1]);
        }          
        // arr.splice(arr[i-1], 1, arr[i-1]);
        // return arr;
      }else if(arr[i] == "--discard-next"){
        if(arr.length-1 > arr.indexOf(arr[i])){
          ++i;
          ++i;
        }
        // arr.splice(arr[i-1], 2);
        // return arr;
      }else if(arr[i] == "--discard-prev"){
        if(arr.indexOf(arr[i]) != 0){          
          transformArr.pop()
        }          
        // arr.splice(arr[i-2], 2);
        // return arr;
      }else{
        transformArr.push(arr[i]);
      }      
    }    
    return transformArr; 
  }else{
    throw new Error();
  }
};
