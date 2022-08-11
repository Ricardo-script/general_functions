values = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

const removeDuplicates = values.filter((atual, next) => values.indexOf(atual) === next);

 console.log('removeDuplicadas', removeDuplicates)
