let obj = {
  user0: 'Santa',
  user1: 'Rudolph',
  user2: 'Grinch',
}

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key])
})

/*
user0 Santa
user1 Rudolph
user2 Grinch
*/

Object.values(obj).forEach((value => {
  console.log(value)
})

/*
Santa
Rudolph
Grinch
*/

Object.entries(obj).forEach(value => {
  console.log(value)
})

/*
[ 'user0', 'Santa' ]
[ 'user1', 'Rudolph' ]
[ 'user2', 'Grinch' ]
*/
