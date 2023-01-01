function equalObject(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    return false;
}

// 测试
console.log(equalObject({ a: 100, b: 99 }, { a: 100, b: 99 }));
