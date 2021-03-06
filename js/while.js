// While Loops
let value = 2;

while (value < 65537) {
    console.log(value);
    value = value * 2;

}

// Ice cream problem
let totalCones = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("Total to be sold: " + totalCones);

// running total
let total = 0;

do {
    // How many cones were bought
    let bought = Math.ceil(Math.random() * (5 - 1) + 1);

    if (total + bought > totalCones) {
        continue;
    }
    total = total + bought;
    console.log("Customer bought: " + bought);
    console.log("Total Sold: " + total);
} while (total < totalCones);