var oddNumber;
while (true) {
    oddNumber = parseInt(prompt("Pick an odd number between 1 and 50"));
    if (oddNumber % 2 != 0) {
        break;
    }
}

console.log("Number to skip is" + number);

for (let i = 0; i < 50; i++) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + i);
        continue
    }
    if (i %2 ==0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}
