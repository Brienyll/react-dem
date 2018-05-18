const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: 'Brielle'
};

const newPerson = {
  ...person,
  age: 2
}

console.log(newPerson);

const filterNums = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filterNums(1, 2, 3));
