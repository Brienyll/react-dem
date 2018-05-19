//array destructuring
const numbers = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3);


//object destructuring
{name} = { name: 'Brix', number: 17 };
console.log(name);
console.log(number);
