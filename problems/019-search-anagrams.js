/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
  if(value === '') {
    return ''
  }

  let str = value.replace(/\./g, '');    
  let arr = str.split(/\s/);
  let sortedArr = arr.map(item => item.toLowerCase().split('').sort().join(''));
  console.log(sortedArr)
  const duplicates = [];

  for (let i = 0; i < sortedArr.length; i++) {
  for (let j = i + 1; j < sortedArr.length; j++) {
  if (sortedArr[i] === sortedArr[j]) {
    duplicates.push(sortedArr[i], sortedArr[j]);
  }
}

  return duplicates
}
  }

module.exports = searchAnagrams;
