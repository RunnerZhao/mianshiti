// 冒泡排序
const bubblesort = function (nums) {
    const len = nums.length;
    if (len < 2) return nums;
    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < len - i - 1; j += 1) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

// 测试
console.log(bubblesort([1, 6, 4, 2, 0]));
