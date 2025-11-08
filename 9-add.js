function add(a, b) {
    return a + b;
}

const first = parseInt(process.argv[2], 10);
const second = parseInt(process.argv[3], 10);

if (Number.isInteger(first) && Number.isInteger(second)) {
    console.log(add(first, second));
} else {
    console.log("Missing or invalid arguments");
}