const permuteUnique = function (nums) {
    const len = nums.length, res = [], used = [];
    nums.sort();
    const backtrack = (deepStack) => {
        if (deepStack.length === len) {
            return res.push([...deepStack])
        }
        for (let i = 0; i < len; i += 1) {
            if (nums[i - 1] === nums[i] && i - 1 > 0 && !used[i - 1]) continue;
            if (used[i]) continue;
            deepStack.push(nums[i]);
            used[i] = true;
            backtrack(deepStack);
            deepStack.pop();
            used[i] = false;
        }
    };
    backtrack([]);
    return res;
}

// 测试
console.log(permuteUnique([1, 0, 2, 3, 3]));
