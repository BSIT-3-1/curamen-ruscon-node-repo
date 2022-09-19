let n = 5;
let space = "";

// Top pyramid
for (let i = 0; i <= n; i++) {

  for (let j = n; j >= i; j--) {
    space += " ";
  }

  for (let k = 0; k <= i * 2 - 1; k++) {
    space += "*";
  }
  space += "\n";
}
// Bottom pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j <= i; j++) {
    space += " ";
  }

  for (let k = (n - i) * 2 - 1; k >= 0; k--) {
    space += "*";
  }
  space += "\n";
}
console.log(space); 

function diamond(size) {
  
  console.log(`The number ${size} is ${size % 2 != 0 ? "Odd" : "Even"}.`);
    
    let row = size * 2;
    for (let i = 1; i <= size; i++) {
      let string = "";
      for (let j = 1; j <= row; j++) {
        if (j >= size + 1 - i && j <= size + i) {
          string += "*";
        } else {
          string += " ";
        }
      }
      console.log(string);
    }
    for (let i = size - 1; i >= 1; i--) {
      let string = "";
      for (let j = 1; j <= row; j++) {
        if (j >= size + 1 - i && j <= size + i) {
          string += "*";
        } else {
          string += " ";
        }
      }
      console.log(string);
    }
  }
  console.log(diamond(5));