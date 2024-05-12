/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const string = s+s ;

    if (s.length !== goal.length) return false;
    return string.includes(goal);
};