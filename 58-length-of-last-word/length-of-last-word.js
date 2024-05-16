/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordsArray = s.split(' ').filter(Boolean);
    const lastElement = wordsArray[wordsArray.length - 1];
    return lastElement.length;
};