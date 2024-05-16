/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const largeNumberPlusOne = BigInt(digits.join('')) + BigInt(1);
    return `${largeNumberPlusOne}`.split('');
};