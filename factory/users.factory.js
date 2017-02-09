const faker = require('faker');
const jsonfile = require('jsonfile')

const total = 100;
const file = './public/json/users.json'

const iterator = new Array(total).fill(); // How many users to generate?
let users = {
  data: null
}

console.log("Here's", total, "users 4 U.");

users.data = iterator.map((_, i) => {

  const gender = faker.random.number(1);

  console.log(faker.name.firstName);

  let user = {
    id:     i,
    name:   faker.name.lastName(1) + ', ' + faker.name.firstName(1),
    age:    faker.random.number(80),
    gender: gender === 0 ? 'male' : 'female'
  };

  console.log(user);

  return user;
});

users.data.reverse()

jsonfile.writeFile(file, users, (err) => {
  if(err) console.error(err);
  else console.log("Saved to", file);
})
