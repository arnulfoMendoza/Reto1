function createPhoneNumber(numbers) {
    let phone_number = "";
  
    phone_number += "(";
    for (let i = 0; i < 3; i++) {
      phone_number += numbers[i];
    }
    phone_number += ") ";
    for (let i = 3; i < 6; i++) {
        phone_number += numbers[i];
      }
      phone_number += "-";
    for (let i = 6; i < 10; i++) {
      phone_number += numbers[i];
    }
    
    return phone_number;
  }
const numbers = [3, 0, 4, 6, 7, 1, 0, 3, 4, 8];
const phone_number = createPhoneNumber(numbers);
console.log(phone_number); 


  