const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3)(6);
