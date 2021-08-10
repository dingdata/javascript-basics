const deepStrictEqual = require("./assert-helper");
// let user = {
//     name: "John",
//     age: 30,
// };

// function countProperties(user) {
//     Object.entries(user);
//     console.log(Object.entries(user).length);
// }
// console.log(countProperties(user)); // 2

// const salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function sumSalaries(salaries) {
//     console.log(Object.entries(salaries));
//     return Object.values(salaries).reduce((sum, key) => sum + key);
// }
// console.log(sumSalaries(salaries)); // 650

// function sleepInSeptember(wakeMeUpWhenSeptemberEnds) {
//     console.log("sleeping in september");
//     console.log("will call wakeMeUpWhenSeptemberEnds later");
//     wakeMeUpWhenSeptemberEnds();
// }

// sleepInSeptember(function () {
//     console.log("I will wait first");
// });
//sleepInSeptember(() => console.log("Wakeup Arrow"));



const assert = require("assert");

const myMap = (array, callback) => {
    const mapArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        results.push(callback(item))
    }
    return mapArray;
};

const myFilter = (array, callback) => {


    const filterArr = [];
    for (let index = 0; index < array.length; index++) {
        if (!!callback(array[index], index, array)) {
            filterArr.push(array[index]);
        }
    }
    return filterArr

};

assert.deepStrictEqual(
    myMap([1, 2, 3, 4], (element) => element * 2),
    [2, 4, 6, 8]
);

// assert.deepStrictEqual(
//     myFilter([1, 2, 3, 4], (element) => element < 3),
//     [1, 2]
// );