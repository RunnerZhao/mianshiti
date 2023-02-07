//旋转数组 pop unshift

function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length)//取余 取绝对值
    for (let i = 0; i < step; i++) {
        let lastValue = arr.pop()
        arr.unshift(lastValue)
    }
    return arr
}

//旋转数组 concat
function rotate2(arr: number[], k: number): number[] {
    if (!k || k ===0) return arr
    const length = arr.length
    const step = Math.abs(k % length)
    const part1 = arr.slice(-step)//取后半部分
    const part2 = arr.slice(0,length-step)//取前半部分
    return part1.concat(part2)

}
