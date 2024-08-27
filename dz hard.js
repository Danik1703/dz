
// Завдання 1
function addNumbers(a, b) {
    return a + b;
}


console.log(addNumbers(2, 8)); 
// Завдання 2
function get(numbers) {
    return Math.max(...numbers);
}


console.log(get([3, 5, 7, 2, 9]));  

// Завдання 4
function repeat(word, times) {
    return word.repeat(times);
}


console.log(repeat("hello", 3)); 

// Завдання 5
function fizzBuzzCheck(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}


console.log();
fizzBuzzCheck(15); 
fizzBuzzCheck(10); 
fizzBuzzCheck(7);  

// Завдання 6
function draw(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let star = '';
        for (let j = 0; j < num; j++) {
            star += '*';
        }
        console.log(star);
    }
}

draw([3, 7, 1, 10, 8]);



