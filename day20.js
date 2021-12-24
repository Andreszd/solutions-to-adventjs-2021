function pangram(letter) {
  const ALPHABET = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  const specialsChars = {
    a: ['á', 'ä'],
    e: ['é', 'ë'],
    o: ['ó', 'ö'],
    u: ['ú', 'ü'],
    i: ['í', 'ï'],
  };
  return ALPHABET.every(
    (char) =>
      letter.toLowerCase().includes(char) ||
      (specialsChars[char] &&
        (letter.toLowerCase().includes(specialsChars[char][0]) ||
          letter.toLowerCase().includes(specialsChars[char][1])))
  );
}
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'); // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'); // true

pangram(
  'Esto es una frase larga pero no tiene todas las letras del abecedario'
); // false
pangram('De la a a la z, nos faltan letras'); // false
