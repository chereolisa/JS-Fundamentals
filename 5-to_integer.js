let arg = process.argv[2];

if (arg && !isNaN(arg) && Number.isInteger(Number(arg))) {
    console.log(`My number: ${parseInt(arg, 10)}`);
} else {
    console.log("Not a number");
}