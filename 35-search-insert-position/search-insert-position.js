/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }

    const biggerThanTargetIndex = nums.findIndex(num => num > target);

    console.log(biggerThanTargetIndex)

    if (biggerThanTargetIndex === -1) {
        return nums.length;
    } else {
        return biggerThanTargetIndex;
    }
};