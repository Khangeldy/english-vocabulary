export function randomNumber (min, max, excludeNumbers) {
  const numb = Math.floor(Math.random() * (max - min)) + min;
  if(excludeNumbers && excludeNumbers.includes(numb)) {
    return randomNumber(min, max, excludeNumbers);
  }
  return numb;
}
