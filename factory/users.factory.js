const faker = require('faker');
const jsonfile = require('jsonfile')

const total = 100;
const file = './public/json/users.json'

const iterator = new Array(total).fill(); // How many users to generate?

console.log("Here's", total, "users 4 U.");

let users = iterator.map((_, i) => {

  const gender = faker.random.number(1);

  let user = {
    id:     i,
    name:   faker.name.firstName(gender) + ' ' + faker.name.lastName(gender),
    age:    faker.random.number(100),
    gender: gender === 0 ? 'male' : 'female'
  };

  console.log(user);

  return user;
});


jsonfile.writeFile(file, users, (err) => {
  if(err) console.error(err);
  else console.log("Saved to", file);
})
