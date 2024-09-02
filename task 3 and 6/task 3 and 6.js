// Завдання 3

function breakName(fullName) {
    let parts = fullName.split(' '); 
    let first = parts[0];
    let last = parts[1]; 
    return {first, last}; 
}

console.log(breakName("Johny Depp"));

// Завдання 6


function cut(someString, limit) {
    if (someString.length > limit) { 
        return someString.slice(0, limit) + "..."; 
    } else {
        return someString; 
    }
}

console.log(cut("Hello, world!", 6));


