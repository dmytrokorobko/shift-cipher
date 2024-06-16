class ShiftCipher {
  constructor(count) {
   this.alphStart = 65;
   this.alphEnd = 90;
   let x = Math.abs(count);   
   if (x > (this.alphEnd - this.alphStart)) x = x - (Math.floor(x / (this.alphEnd - this.alphStart)) * (this.alphEnd - this.alphStart));
   if (count < 0) x *= -1;   
   this.count = x;
  }

  encrypt(str) {   
    str = str.toUpperCase().split("");
    for (let i = 0; i < str.length; i++) {
      let ch = str[i].charCodeAt(0);
      let newCh = ch;
      //check if initial char is letter
      if (ch >= this.alphStart && ch <= this.alphEnd) {
         //encrypt letter forward to count
         if (ch + this.count >= this.alphStart && ch + this.count <= this.alphEnd) newCh = ch + this.count;
         else if (ch + this.count > this.alphEnd) newCh = this.alphStart + ch + this.count - this.alphEnd - 1; //count > 0
         else if (ch + this.count < this.alphStart) newCh = this.alphEnd + (ch - this.alphStart + this.count) + 1; //count < 0
      }      
      str[i] = String.fromCharCode(newCh);
    }
    str = str.join("");
    return str;
  }

  decrypt(str) {
   str = str.toUpperCase().split("");
   for (let i = 0; i < str.length; i++) {
     let ch = str[i].charCodeAt(0);
     let newCh = ch;
     //check if initial char is letter
     if (ch >= this.alphStart && ch <= this.alphEnd) {
        //decrypt letter backward to count
        if (ch - this.count >= this.alphStart && ch - this.count <= this.alphEnd) newCh = ch - this.count;
        else if (ch - this.count < this.alphStart) newCh = this.alphEnd - (this.alphStart - (ch - this.count)) + 1; //count > 0
        else if (ch - this.count > this.alphEnd) newCh = this.alphStart + ((ch - this.count) - this.alphEnd) - 1; //count < 0
        
     }      
     str[i] = String.fromCharCode(newCh);
   }
   str = str.join("");
   return str.toLowerCase();
  }
}

const cipher = new ShiftCipher(10562);
let enc = cipher.encrypt("I love to code! xyz cba"); // returns 'K NQXG VQ EQFG!'
console.log(enc);
let dec = cipher.decrypt(enc);
console.log(dec);

const cipher2 = new ShiftCipher(-2456);
enc = cipher2.encrypt("I love to code! xyz cba"); 
console.log(enc);
dec = cipher2.decrypt(enc);
console.log(dec);

console.log(new ShiftCipher(2).decrypt("K <3 OA RWRRA")); // returns 'i <3 my puppy'
