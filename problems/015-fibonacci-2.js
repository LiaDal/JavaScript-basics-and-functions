/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    let first = 0;
    let second = 1;
    let num = 0;
    let iteration_count = 1;
    
    if (value < 1) {
        return 0;
    }
    if (value === 1) {
        return 1;
    }
    while (num <= value) {
        num = first + second;
        first = second;
        second = num;
        iteration_count++
        if (num === value) {
            return iteration_count;
        }
    }
    return undefined;
}

module.exports = isFibonacci;
