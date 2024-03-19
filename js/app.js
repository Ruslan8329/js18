////////////////////////////////////////////////////1/////////////////////////////////////////////////////

let user = {
  name: "Ruslan",
  age: 20,
  greet() {
    console.log(`Привет меня зовут ${this.name} и мне ${this.age} лет`);
  },
};
user.greet();

//////////////////////////////////////////////////2//////////////////////////////////////////////////

let rectangle = {
  width: 20,
  height: 20,
  getArea() {
    let area = this.width * this.height;
    console.log(area);
  },
};
rectangle.getArea();

///////////////////////////////////////////////3////////////////////////////////////////////////////

let game = {
  score: 86,
  level: 13,
  increaseScore() {
    let scoreUp = (this.score += 1);
    console.log(scoreUp);
  },
  increaseLevel() {
    let levelUp = (this.level += 1);
    console.log(levelUp);
  },
};
game.increaseScore();
game.increaseLevel();

/////////////////////////////////////////////////4///////////////////////////////////////////////////////

let user2 = {
  name: "Ruslan",
  age: 20,
  sayName() {
    console.log(`Меня зовут ${this.name}`);
  },
};
user2.sayName();

////////////////////////////////////////////////5//////////////////////////////////////////////////

let counter = {
  value: 10,
  increase() {
    let valueUp = (this.value += 1);
    console.log(valueUp);
  },
  decrease() {
    let valueDown = (this.value -= 1);
    console.log(valueDown);
  },
};
counter.increase();
counter.decrease();

/////////////////////////////////////////////////6////////////////////////////////////////////////////

let product = {
  name: "Mango",
  price: 3,
  getDiscountedPrice(discount) {
    let discountPrice = this.price * (1 - discount / 100);
    return discountPrice;
  },
};
console.log(product.getDiscountedPrice(10));

//////////////////////////////////////////////////7//////////////////////////////////////////////////

let team = {
  name: "Real",
  members: ["Ronaldo", "Bale", "Benzema", "Kross", "Ramos", "Pepe"],
  listMembers() {
    this.members.forEach((member) => {
      console.log(member);
    });
  },
};
team.listMembers();
/////////////////////////////////////////1-call/////////////////////////////////////////////////////

let person = {
  sayHello() {
    console.log(`Меня зовут ${this.name}`);
  },
};
person.sayHello.call({ name: "Ruslan" });
person.sayHello.call({ name: "Maqa" });

///////////////////////////////////////1-bind/////////////////////////////////////////////////

function multiply(a, b) {
  return a * b;
}
let multiplication = multiply.bind(undefined, 5);

console.log(multiply(2, 4));
console.log(multiplication(2));

///////////////////////////////////2-apply/////////////////////////////////////////////////////

function findMax(numbers) {
  return Math.max.apply(undefined, numbers);
}
let numbers = [12, 4, 56, 8, 10];
let max = findMax(numbers);
console.log(max);

///////////////////////////////////2-bind//////////////////////////////////////////////////

let dog = {
  name: "Шарик",
  bark() {
    console.log(`Гав-Гав меня зовут ${this.name}`);
  },
};

function barkTwo() {
  this.bark();
  this.bark();
}
let barkResult = barkTwo.bind(dog);

barkResult();

////////////////////////////////////////2-call//////////////////////////////////////////////////////

function greet(name, dayTime) {
  let greating;
  if (dayTime === "утро") {
    greating = "Доброе утро";
  }
  if (dayTime === "день") {
    greating = "Добрый день";
  }
  if (dayTime === "вечер") {
    greating = "Добрый вечер";
  } else {
    undefined;
  }

  console.log(`Привет ${name} сейчас ${dayTime}`);
}
greet.call(null, "Ruslan", "утро");

/////////////////////////////////////3-bind///////////////////////////////////////////////////////////
let person2 = {
  name: "Ruslan",
};
function sayName() {
  console.log(`Меня зовут ${this.name}`);
}
let personName = sayName.bind(person2);
personName();

/////////////////////////////////////3-call//////////////////////////////////////////////////////////

function printDetails(name, age, job) {
  console.log(`Имя ${name} Возраст ${age} Работа ${job}`);
}

let details = {
  name: "Ruslan",
  age: 20,
  job: "frontend",
};

printDetails.call(null, details.name, details.age, details.job);
