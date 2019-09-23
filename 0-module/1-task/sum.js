function sum(a, b) {
    if ([a, b].some(val => typeof val !== 'number')) throw TypeError();
    else return a + b;
}

module.exports = sum;
