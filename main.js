const num = 266219;
console.log(typeof num);
const splitNum = (num).toString().split("");
console.log(splitNum);
const productNum = splitNum.reduce((acc, rec) => acc * rec);
console.log(productNum);
const degreeNum = productNum ** 3;
console.log(String(degreeNum).slice(0, 2));