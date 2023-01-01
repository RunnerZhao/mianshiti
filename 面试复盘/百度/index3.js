var permute = function (nums) {
    const len = nums.length, res = [], deepStack = [];
    const backtrack = (deepStack) => {
        // 递归终止条件
        if (deepStack.length === len) {
            return res.push([...deepStack]);
        }
        for (let i = 0; i < len; i += 1) {
            if (!deepStack.includes(nums[i])) {
                deepStack.push(nums[i]);
                backtrack(deepStack);
                deepStack.pop();
            }
        }
    };
    backtrack(deepStack);
    return res;
}

// 测试
console.log(permute([1, 2, 3]));
