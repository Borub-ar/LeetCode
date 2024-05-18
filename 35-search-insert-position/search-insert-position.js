/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }

    const missingNumberIndex = nums.findIndex(num => num > target);

    if (missingNumberIndex === -1) {
        return nums.length;
    } else {
        return missingNumberIndex;
    }
};