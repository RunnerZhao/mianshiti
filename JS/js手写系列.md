- 1.写一个方法找出字符串中最多的字母？

>直接遍历字符串的方法有哪几种：3种

>1.for循环。

>2.for...of...

>3.for...in...

>4.用展开语法也可以展开字符串

```javascript
        function searchStr(str) {
            const obj = {};
            // 1.统计字符串中每个字母出现的次数
            for (const val of str) {
                if (obj[val]) {
                    obj[val]++;
                } else {
                    obj[val] = 1;
                }
            }
            // 2.找出出现次数最多的那个字母
            let maxLetter = '', number = 0;
            for (const key in obj) {
                if (obj[key] > number) {
                    number = obj[key];
                    maxLetter = key;
                }
            }
            console.log('出现次数最多的字母：' + maxLetter + ',出现的次数：' + number);
            return maxLetter;
        }
        console.log(searchStr('asdaa111111'));
```
