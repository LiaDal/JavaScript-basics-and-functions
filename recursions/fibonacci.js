/**
 * Функция, которая принимает на вход индекс и возвращает число Фибоначчи с этим индексом.
 * @param {number} n - индекс числа Фибоначчи
 * @return {number} - число Фибоначчи с заданным индексом
 */
function fibonacci(n) {
    let prev = 0, next = 1;
    for(let i = 0; i < n; i++){
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return prev;
}

// Примеры:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
