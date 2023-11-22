/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
  const gender = list.filter( item => item.gender === 'Male')
  if(gender.length > 0){
    const age = gender.sort((a, b) => a.age < b.age ? 1 : -1);
      return list.indexOf(age[0]) + 1
  }
    return undefined
}

module.exports = census;
