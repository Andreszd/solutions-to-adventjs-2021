function fixFiles(files) {
  const stack = [];
  files.forEach((file) => {
    if (stack.includes(file)) {
      let count = stack.filter(
        (el) => el === file || el.split('(')[0] === file
      ).length;
      stack.push(`${file}(${count})`);
    } else {
      stack.push(file);
    }
  });
  return stack;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
fixFiles(files); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
fixFiles(files2); //= ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
fixFiles(files3); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
