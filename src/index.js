module.exports = function reverse (n) {
    let reversed = Math.abs(n).toString().split("").reverse().join("");
    return +reversed;
}
