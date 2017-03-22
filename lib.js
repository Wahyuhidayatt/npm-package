module.exports = function convert (n) {
  var romawi = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var result = "";

  for(let i = 0; i<romawi.length; i++){
    while(n>= angka[i]){
      result = result+romawi[i];
      n = n-angka[i];
    }
  }
  return result;
}
