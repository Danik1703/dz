// Завдання 1
function getStringLength(some) {
    // зберігаємо довжину рядка у змінну length щоб дізнатись кількість символів в рядку some
    let length = some.length;
    // повертаємо довжину рядка
    return length;
}

// Завдання 2
function toUpperCase(something) {
    // змінюємо всі літери до маленького регістру
    let upper = something.toUpperCase();
    // потім повертаємо в рядок велики літери
    return upper;
}

// Завдання 4
function combineTexts(first, second) {
    // об'єднуємо два рядки та зберігаємо що вишло  у змінну combinedText
    let combinedText = first + second;
    // потім повертаємо два рядки в суммі
    return combinedText;
}

// Завдання 5
function hasSubstring(some1, some2) {
    // робимо перевірку чи є some1 в some2 і повертаємо true або false
    if (some1.indexOf(some2) !== -1) {
        return true;  // якщо маємо то повертаємо true
    } else {
        return false; // якщо немаємо то повертаємо false
    }
}

// Завдання 7
function findCharPosition(something, char) {
    // робимо знахід позиціі символу в рядку та зберігаємо його  в змінну position
    let position = something.indexOf(char);
    //  потім повертаємо нашу позицію символу 
    return position;
}

// Завдання 8
function splitIntoWords(something) {
    // розділяємо рядок на слова по пробілах та потім зберігаємо в масив words
    let words = something.split(' ');
    // повертаємо масив слів котрий вийщов (' ' пустий рядок це пробіл)
    return words;
}

// Завдання 9
function replaceSpaces(anything, newChar) {
    // замінюєм всі пробіли в нашому рядку на newChar та потім зберігаємо у змінну newText
    let newText = anything.split(' ').join(newChar);
    // Повертаємо новий рядок з заміненими пробілами
    return newText;
}

// Завдання 10
function compareTexts(some1, some2) {
    // перевіряємо чи є ці два рядки однаковими
    if (some1 === some2) {
        return true;  // якщо вони однакові то будемо повертати true
    } else {
        return false; //  якщо вони різні то будемо  повертатати false
    }
}

// Завдання 11
function removeTextPart(anything, partToRemove) {
    // робимо видаленя частини рядка за допомогою partToRemove з рядка anything
    let newText = anything.replace(partToRemove, '');
    // повертаємо новий рядок без видаленой частини
    return newText;
}

// Завдання 12
function textToArray(some) {
    // розбиваємо рядок на окремі символи та потім  зберігаємо у масив characters
    let characters = some.split('');
    // після збереження повертаємо масив символів
    return characters;
}

// Завдання 13
function findLastCharPosition(something, char) {
    // знаходимо останній  символ char у рядку something
    let lastPosition = something.lastIndexOf(char);
    // повертаємо останній символ
    return lastPosition;
}

// Завдання 14
function toLowerCase(some) {
    // змінюємо всі літери в рядку на маленькі за допомогою (toLowerCase) та зберігаємо в lowerText
    let lowerText = some.toLowerCase();
    // потім повертаємо рядок з маленькими літерами
    return lowerText;
}

// Завдання 15
function isPartOfText(somethingBig, somethingSmall) {
    // перевіряємо, чи є somethingBig підрядком в somethingSmall
    if (somethingBig.indexOf(somethingSmall) !== -1) {
        return true;  // якщо так то  повертаємо true
    } else {
        return false; // якщо ні то повертаємо false
    }
}

// Завдання 16
function findElementIndex(arr, something, index) {
    // якщо індекс в нашому рядку не заданий то будемо починати з нуля
    if (index === undefined) {
        index = 0;
    }
    // якщо індекс пройшов довжину масиву то  повертаємо -1 (-1 це значить що елемент не знайдено)
    if (index === arr.length) {
        return -1;
    }
    // якщо ми знайдемо елемент то  повернемо його в індекс
    if (arr[index] === something) {
        return index;
    } else {
        // якщо елемент  не знайдено то  викликаємо функцію з наступним індексом
        return findElementIndex(arr, something, index + 1);
    }
}

// Завдання 17
function sumArray(array, idx) {
    // якщо індекс в нашому рядку не заданий то будемо починати з нуля
    if (idx === undefined) {
        idx = 0;
    }
    // яякщо індекс пройшов довжину масиву то повертаємо 0 (це буде кінець рекурсії)
    if (idx === array.length) {
        return 0;
    } else {
        // додаємо елемент на якому ми зупинились якщо елемент  не знайдено то  викликаємо функцію з наступним індексом
        return array[idx] + sumArray(array, idx + 1);
    }
}
