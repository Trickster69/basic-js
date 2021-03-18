const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--double-next") {
        if(arr.length-1 > i ){          
          transformArr.push(arr[i+1]);          
        }
        
      }else if(arr[i] == "--double-prev"){
        if(i > 0 && arr[i-2] !='--discard-next'){          
          transformArr.push(arr[i-1]);
        }
        
      }else if(arr[i] == "--discard-next"){
        i++;
      }else if(arr[i] == "--discard-prev"){
        if(transformArr.length && arr[i - 2] != '--discard-next'){          
          transformArr.pop();
        }
      }else{
        transformArr.push(arr[i]);
      }      
    }    
    return transformArr; 
  }else{
    throw new Error();
  }
};
