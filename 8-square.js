const sizeArg = process.argv[2];
const size = parseInt(sizeArg, 10);

if (!Number.isInteger(size) || size <= 0) {
    console.log("Missing size");
} else {
    let row = 0;
    while (row < size) {
        let line = '';
        let col = 0;
        while (col < size) {
            line += 'X';
            col++;
        }
        console.log(line);
        row++;
    }
}