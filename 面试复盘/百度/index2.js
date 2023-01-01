const arr = [{ a: 1, b: 2 }, { a: 0, b: 1 }, { a: 10, b: 11 }];

console.log(arr.sort(function (a, b) {
    return (a.a + a.b) - (b.a + b.b);
}));
