/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const startSum = number.split('').slice(0, 3).reduce((acc, a) => acc + +a,0)
    const endSum = number.split('').slice(-3).reduce((acc, a) => acc + +a ,0)
    return startSum === endSum
}

module.exports = checkTicket;
