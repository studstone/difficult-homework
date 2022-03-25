let num = 266219;
console.log(typeof num);
let splitNum = ("" + num).split("");
console.log(splitNum);
let productNum = splitNum.reduce((acc, rec) => acc * rec);
console.log(productNum);
let degreeNum = productNum ** 3;
console.log(String(degreeNum).slice(0, 2));