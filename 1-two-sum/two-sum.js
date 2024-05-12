/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indexes;

    nums.forEach((num, index) => {
        if (indexes) return

        nums.forEach((number, innerIndex) => {
            if (num + number === target && innerIndex !== 0 && index !== innerIndex) {
                console.log(index, innerIndex)
                indexes = [index, innerIndex]
            }
        })
    })

    return indexes;
};