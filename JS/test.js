function searchString(s) {
    const map = new Map();
    for (const value of s) {
        if (map.get(value)) {
            map.set(value, map.get(value) + 1);
        } else {
            map.set(value, 1);
        }
    }
    const sumRes = Object.fromEntries(map.entries());
    const maxValue = Math.max(...Object.values(sumRes));
    for (const key in sumRes) {
        if (sumRes[key] === maxValue) {
            return key
        }
    }
}

const str = 'aaabbbbbbbcdda';
console.log(searchString(str));
