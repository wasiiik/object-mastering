await this.randomInteger(4);
async randomInteger(number) {

    let length = parseInt(number);
    let string: string = number.toString();
    let min = 1 * parseInt(string.padEnd(length, "0"));
    let max = parseInt(string.padEnd(length, "9"));

    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}