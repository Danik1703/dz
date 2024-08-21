
//Завдання 2
function getAllValues(objectsArray) {
  const valuesArray = [];

  for (let i = 0; i < objectsArray.length; i++) {
    const obj = objectsArray[i];
    const values = Object.values(obj);

    for (let j = 0; j < values.length; j++) {
      valuesArray.push(values[j]);
    }
  }

  return valuesArray;
}

const someArray = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];
const result = getAllValues(someArray);
console.log(result);

  



//Завдання 1
  const books = {
    "Хоббіт": "Дж. Р. Р. Толкін",
    "Гра Престолів": "Джордж Мартін",
    "Гаррі Поттер": "Дж. К. Роулінг"
};

for (let book in books) {
    console.log(book);
}



//Завдання 3
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}



//Завдання 4

const computer = {
  brand: 'Apple',
  model: 'MacBook Pro', 
  processor: 'M1', 
  ram: 16, 
  storage: {
    ssd: 240, 
    hdd: "terrobait"
  },
  peripherals: ['мишка', 'клавіатура'], 
};


if (computer.storage.hdd) {
  console.log('HDD:', computer.storage.hdd);
} else {
  console.log('HDD не знайдено');
}


const computerCopy = {...computer,storage: {...computer.storage},peripherals: [...computer.peripherals]};

console.log(computer);
console.log(computerCopy);


const brand = computer.brand;
const model = computer.model;
const processor = computer.processor;
const ram = computer.ram;
const ssd = computer.storage.ssd;

console.log(brand);
console.log(model);
console.log(processor);
console.log(ram);
console.log(ssd);