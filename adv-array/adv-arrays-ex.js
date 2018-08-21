// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
const exArray = array.forEach(user => {
  let {username} = user;
  newArray.push(`${username}!`);
});

//Create an array using map that has all the usernames with a "?" at the end of usernames
const qArray = array.map(user => {
  let {username} = user;
  return `${username}?`;
});

console.log(qArray);

//Filter the array to only include users who are on team: red
const redArray = array.filter(user => {
  return user.team === 'red';
});

console.log(redArray);

//Find out the total score of all users using reduce
const totalScores = array.reduce((acc, tscore) => {
  return acc + tscore.score;
}, 0);

console.log(totalScores);
