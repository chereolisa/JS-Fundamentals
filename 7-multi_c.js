const arg = process.argv[2];
const num = parseInt(arg, 10);

if (Number.isInteger(num) && num > 0) {
    let i = 0;
    while (i < num) {
        console.log("C is fun");
        i++;
    }
} else {
    console.log("Missing number of occurrences");
}