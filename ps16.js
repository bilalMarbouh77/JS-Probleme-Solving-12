function createPhoneNumber(numbers){
  let format = "(";
  for(let i=0;i<10;i++){
    if(i==3){
        format+=") "
    }else if(i==6){
        format+="-"
    }
    format+=numbers[i]
  }
  return format
}

// Question:

// Write a JavaScript function that takes an
// array of 10 integers (between 0 and 9)
// and returns a formatted phone number in 
// the following format:

// Examples:
// "(XXX) XXX-XXXX"

