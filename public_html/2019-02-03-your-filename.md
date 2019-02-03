let hash = '';
for (var i = 0; i < 7; i++) {
    hash += '#';
    // console.log(hash);
}

let fizz = 3;
let buzz = 5;
let fizzBuzz = fizz * buzz;

// for (var i = 1; i <= 20; i++) {
//     if (i % fizzBuzz === 0) console.log('FizzBuzz');
//     else if (i % fizz === 0) console.log('Fizz');
//     else if (i % buzz === 0) console.log('Buzz');
//     else console.log(i);
// }

let size = 8, board = '';

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    board += '\n';
}
console.log(board);

