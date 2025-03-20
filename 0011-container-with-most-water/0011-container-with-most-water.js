// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// const maxArea = function(height) {
//     let lp = 0, rp = 1, answer = 0;
//     while(lp < height.length -1){
//         const h = Math.min(height[lp], height[rp]);
//         const l = rp - lp
//         answer = Math.max(answer, h*l);
//         if(rp < height.length - 1) rp += 1;
//         else {
//             lp += 1;
//             rp = lp + 1;
//         }
//     }
//     return answer
// };
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let lp = 0, rp = height.length - 1 , answer = 0;
    while(lp !== rp){
        const h = Math.min(height[lp], height[rp]);
        const l = rp - lp;
        answer = Math.max(answer, h*l);
        height[lp] <= height[rp] ? lp++ : rp--;
    }
    return answer
};