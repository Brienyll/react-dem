const person = {
  name: 'Brix'
};

const secondPerson = { //if person, output will be yield Brielle
  ...person
}

person.name = 'Brielle';

console.log(secondPerson);
