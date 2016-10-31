// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz++;
}
console.log(checkz);
// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var i = 0;
while (i < 3) {
  checkz -= 2;
  i++;
}
console.log(checkz);
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/*
The codes defines an array of numbers from 1 to 7, and a total variable as 0.  It then loops through the
array and adds each number to consecutively to the total variable.  Finally, the total is
logged to the console.
*/
