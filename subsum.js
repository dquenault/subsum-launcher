const fs = require('fs');
const sumService = require('@haensl/subset-sum');

if(process.argv[2] == null) {
    console.log("Invalid usage. Usage is node subsum.js <number to match>");
    return;
}

// No longer used
const test_numbers = [1, 4, 2, 5, 1, 3];
const test_target = 6;
const target = parseInt(process.argv[2]);

console.log("Target: " + target);

fs.readFile('./numbers.txt', 'utf8', function(err, contents) {
    //Get integers from file
    const nums = contents.split("\n").map(Number);
    const solver = sumService.subsetSum(nums, target);

    console.log("Solution")
    console.log("--------")
    for (let solution of solver) {
        console.log(solution);
    }
});
