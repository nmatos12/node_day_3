// fs.writeFile('./data.txt', 'this is our text that we added!', (err) => {
//     if (err) return console.log(err);

//     console.log('file written successfully!');
    
//     // if (err) {
//     //     return console.log(err);
//     // }
// });

const fs = require('fs');
const myData = `
# Header

This is our text that we added!

- Another line

- More stuff

## On and on

- JD is ${age}

${genLicense('MIT')}
`;

function genLicense(type) {
    return 'License type: ${type}';
}

fs.writeFile('./data.txt', myData, (err) => {
    if (err) return console.log(err);
    console.log('file written successfully!');
});



