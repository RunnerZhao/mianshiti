function equalObject(obj1, obj2) {
    const obj1Key = Object.keys(obj1);
    const obj2Key = Object.keys(obj2);
    const obj1Value = Object.values(obj1);
    const obj2Value = Object.values(obj2);
    if (equalArray(obj1Key, obj2Key) && equalArray(obj1Value, obj2Value)) {
        return true;
    }
    return false;
}

function equalArray(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return true;
    }
    return false;
}

// 测试
console.log(equalObject({ b: 91, a: 100 }, { a: 100, b: 99 }));
