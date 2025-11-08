const arg = process.argv[2];
const num = parseInt(arg, 10);

if (Number.isInteger(num) && num > 0) {
    for (let i = 0; i < num; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}