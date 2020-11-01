const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countLvl = 0;
    if(Array.isArray(arr)){      
      arr = arr.filter(element => Array.isArray(element));
      for(let key of arr){
        countLvl = Math.max(countLvl, this.calculateDepth(key));
      }
      return 1 + countLvl;
    }else{
      return 0;
    }
  }
};