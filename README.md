# Shift Cipher

This JavaScript class `ShiftCipher` implements a basic shift cipher (also known as a Caesar cipher), which is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Features

- **Encryption**: Shift letters in the string by a specified count.
- **Decryption**: Reverse the shift to retrieve the original string.

## Class: `ShiftCipher`

### Constructor: `ShiftCipher(count)`

- **Parameters**:
  - `count`: The number of positions each letter in the plaintext will be shifted.
- **Initialization**:
  - Adjusts the shift count to handle wrapping around the alphabet.

### Methods

#### `encrypt(str)`

- **Parameters**:
  - `str`: The string to be encrypted.
- **Returns**: 
  - The encrypted string with all letters shifted by the count specified in the constructor.
- **Details**: 
  - Converts the input string to uppercase.
  - Shifts each letter forward by the specified count.
  - Non-alphabet characters remain unchanged.

#### `decrypt(str)`

- **Parameters**:
  - `str`: The string to be decrypted.
- **Returns**: 
  - The decrypted string with all letters shifted back by the count specified in the constructor.
- **Details**: 
  - Converts the input string to uppercase.
  - Shifts each letter backward by the specified count.
  - Non-alphabet characters remain unchanged.
  - Returns the decrypted string in lowercase.

## Usage

```javascript
const cipher = new ShiftCipher(10562);
let enc = cipher.encrypt("I love to code! xyz cba"); // Returns 'K NQXG VQ EQFG!'
console.log(enc);

let dec = cipher.decrypt(enc);
console.log(dec); // Returns 'i love to code! xyz cba'

const cipher2 = new ShiftCipher(-2456);
enc = cipher2.encrypt("I love to code! xyz cba");
console.log(enc); // Returns 'G JMTX RM AMBC! vwt yax'

dec = cipher2.decrypt(enc);
console.log(dec); // Returns 'i love to code! xyz cba'

console.log(new ShiftCipher(2).decrypt("K <3 OA RWRRA")); // Returns 'i <3 my puppy'
