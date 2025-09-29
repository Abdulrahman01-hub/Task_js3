//task 1
// let user = {
//     name: "Abdulrehman",
//     gender: "Male",
//     birthday: "2004-05-15"
// };
// console.log(user.birthday);

//task 2
// let user = {
//     name: "Abdulrehman",
//     gender: "Male",
//     birthday: "2004-05-15"
// };
// user.age = 21;
// delete user.birthday;
// console.log(user);

//task 3
// let user = {
//   name: "Abdulrehman",
//   gender: "Male",
//   age: 21,

//   setAge: function(newAge) {
//     this.age = newAge;
//   },
//   getYearsBeforeRetirement: function() {
//     let retirementAge = 65;
//     return retirementAge - this.age;
//   }
// };

// user.setAge(30);
// console.log("yeni yas", user.age);
// console.log("pensiyaya qeder qalan iller", user.getYearsBeforeRetirement()); 

//task 4

// let client = {
//     fullName: "Abdulrehman Rəhimzadə",
//     creditLimit: 2000,
//     balance: 3000,
//     minPercent: 0.12,

//     getBalance: function () {
//         if (this.balance < 0) {
//             return "borcunuz " + Math.abs(this.balance);
//         }
//         return "balansiniz " + this.balance;
//     },

//     getMinPayment: function () {
//         if (this.balance < 0) {
//             let debt = Math.abs(this.balance);
//             let minPay = debt * this.minPercent;
//             return "minimum odenisiniz " + minPay;
//         }
//         return "sizin borcunuz yoxdur";
//     },

//     withdraw: function (amount) {
//         if (this.balance - amount >= -this.creditLimit) {
//             this.balance -= amount;
//             console.log(amount + " AZN cixarildi yeni balans " + this.balance);
//         } else {
//             console.log("limitiniz kifayet etmir");
//         }
//     },

//     refill: function (amount) {
//         this.balance += amount;
//         console.log(amount + " AZN elave olundu yeni balans " + this.balance);
//     }
// };
// console.log(client.getBalance());
// client.withdraw(3500);
// console.log(client.getBalance());
// console.log(client.getMinPayment());
// client.refill(1000);
// console.log(client.getBalance());  

//task 5
// let calculator = {
//     memory: 0,

//     add: function (a, b) {
//         return a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     },
//     multiply: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         if (b === 0) {
//             return "0-a bolmek olmaz";
//         }
//         return a / b;
//     },
//     saveToMemory: function (value) {
//         this.memory = value;
//         console.log("deyer yaddasa yazildi", value);
//     },
//     clearMemory: function () {
//         this.memory = 0;
//         console.log("yaddas temizlendi");
//     },
//     getFromMemory: function () {
//         return this.memory;
//     }
// };
// console.log(calculator.add(5, 7));
// console.log(calculator.subtract(10, 3));
// console.log(calculator.multiply(4, 6));
// console.log(calculator.divide(20, 5));

// let result = calculator.add(8, 12);
// calculator.saveToMemory(result);

// console.log("yaddasdan oxundu", calculator.getFromMemory());
// calculator.clearMemory();
// console.log("yaddasdan oxundu", calculator.getFromMemory());

//task 6
// function mostFrequent(str) {
//     let arr = str.split(",").map(item => item.trim());
//     let count = {};
//     let maxCount = 0;
//     let mostItem = null;

//     for (let item of arr) {
//         count[item] = (count[item] || 0) + 1;
//         if (count[item] > maxCount) {
//             maxCount = count[item];
//             mostItem = item;
//         }
//     }
//     return mostItem;
// }
// console.log(mostFrequent("1, 3, 2, 3, 4, 3, 5, 3"));
// console.log(mostFrequent("a, b, a, c, a, b"));