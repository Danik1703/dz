 // Задача на методи масивів
// Task : Array Transformation Adventure
// You are on an adventure with a team of explorers, and you have a backpack represented as an array. Perform the following operations:

// You've found a treasure! Use the push method to add the treasure chest (represented as an object) to the end of your backpack.
// Oh no, you've triggered a trap! Use the pop method to remove the last item from your backpack.
// Your team spotted a rare flower! Use the shift method to remove the first item from your backpack.
// You found a map! Use the unshift method to add the map (another object) to the beginning of your backpack.
// You've gathered your findings in your notebook. Use the join method to create a single string, separating each item in your backpack with a comma.
// Later, you read your notes in the journal. Use the split method to split your findings back into an array.
// You've decided to rearrange your backpack for better organization. Use the reverse method to change the order of items in your backpack.
// You've met a fellow explorer with their own backpack. Use the concat method to combine your backpack with their backpack (another array of items).



let backpack = ["книга", "вода", "банан"];

const treasure = "скриння з скарбом";
backpack.push(treasure);
console.log("Після знаходження скарбу:", backpack);


backpack.pop();
console.log("Після потрапляння в пастку:", backpack);


backpack.shift();
console.log("Після знаходження рідкісної квітки:", backpack);


const map = "картра зі скарбом";
backpack.unshift(map);
console.log("Після знаходження карти:", backpack);


const backpackString = backpack.join(", ");
console.log("Елементи рюкзака як рядок:", backpackString);


const backpackArrayFromString = backpackString.split(", ");
console.log("Елементи рюкзака з рядка:", backpackArrayFromString);


backpack.reverse();
console.log("Після перестановки предметів:", backpack);


const explorerBackpack = ["бутилка коли", "чипси"];
const combinedBackpacks = backpack.concat(explorerBackpack);
console.log("Після об'єднання рюкзаків:", combinedBackpacks);
