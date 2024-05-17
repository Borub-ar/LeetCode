/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNumber = 0;

    for (let num of nums) {
        singleNumber ^= num;
    }
    
    return singleNumber;
};