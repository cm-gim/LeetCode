// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const threeSum = function(nums) {
//     let i = 0, j = 1, k = 2;
//     const len = nums.length - 1
//     const set = new Set()
//     nums.sort((a, b)=> a - b)
//     while(i < len - 1){
//         if(nums[i] + nums[j] + nums[k] === 0) set.add(`${nums[i]},${nums[j]},${nums[k]}`)
//         if(j === len - 1){
//             i += 1
//             j = i + 1
//             k = j + 1 
//         }else if (k < len){ k++;
//         }else if (k === len){
//             j += 1
//             k = j + 1
//         }
//     } 
//     return [...set].map((item)=> item.split(',').map(Number))
// };


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const len = nums.length;
    const set = new Set();
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) k--;
            else if (sum < 0) j++;
            else {
                set.add(`${nums[i]},${nums[j]},${nums[k]}`);
                k--;
                j++;
            }
        }
    }
    return [...set].map((item)=> item.split(',').map(Number))
};