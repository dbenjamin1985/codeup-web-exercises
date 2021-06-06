// # 2
function showMultiplicationTable (x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + (x * i));
    }
}
showMultiplicationTable(7);

// # 3
for (let ev = 0; ev<10; ev++) {
    let random = Math.ceil(Math.random() * 200) + 20;
    if (random % 2 !== 0) {
        console.log(random + " is odd");
    } else {
        console.log(random + " is even");
    }
}

// # 4
for (var i = 1, number = ""; i < 10; i++) {
    number += "1";
    console.log(i + number)
}

//#5
for (var i = 100; i > 0; i = i -5) {
    console.log(i);
}

