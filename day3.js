export default function isValid(letter = '') {
  const stack = [];
  let isValid = false;
  let gift = '';
  letter.split('').forEach((char) => {
    if (char === '(') {
      stack.push('(');
    } else if (stack.length > 0 && char !== ')') {
      gift += char;
    } else if (char === ')') {
      stack.pop();
      isValid = isCorrect(gift) && gift.length > 0 && stack.length == 0;
      gift = '';
    }
  });
  return isValid;
}

function isCorrect(gift) {
  return (
    gift.split('').filter((char) => contentAnotherBrackets(char)).length === 0
  );
}

function contentAnotherBrackets(char) {
  return char === '[' || char === ']' || char === '{' || char === '}';
}
console.log(isValid('(muñeca) consola bici'));
