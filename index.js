// pull properties from objevt and create a variable
// const {userName, age} = {
//     userName: 'JD',
//     age: 43
// };

// console.log(userName);
// console.log(userName, age);

// const [first, second, third] = ['orange', 'apple', 'kiwi'];

// console.log(first);
// console.log(first, second, third);

// const [fruit, func] = ['apple', function () {console.log('hey this is weird!')}]

// func()

function myFunc({cool}, num, str) {
    console.log(cool);
    console.log(num);
    console.log(str);
}

myFunc({cool:true, num: 5}, 10, 'some string')

const {userName: mySpecialName, age, info} = {
    userName: 'JD',
    age: 43,
    info: {
        hairColor: 'blonde',
        eyes: 'blue',
    }
};
    
console.log(mySpecialName);



// SPREAD //
// const fruits1 = ['orange', 'apple', 'kiwi'];
// const fruits2 = ['grape', 'banana', 'strawberry'];
// const fruits3 = ['peach', 'blueberry', 'mango'];

// const combined = [...fruits3, 'tomato', ...fruits1, 'pineapple', ...fruits2];

// console.log(combined);

// const personData = {
//     name: 'JD',
//     age: 43
// };

// const additionalData = {
//     hobbies: ['coding', 'fishing', 'pickleball']
// };

// const combinedData = {...personData, ...additionalData};
// console.log(combinedData);

// function sumAllNums(...nums) {
//     let sum = 0;

//     for (let num of nums) 
//         sum += nums;
// }

// sumAllNums(4, 1, 10, 5, 7, 15, 33, 100, 1000, 574);

// const stuff = {
//     printOne: function(){
//         console.log('one');
//     }
// }



// const data =  {
//     name: 'JD',
//     age: 43,
// }

// console.log(Object )