const faker = require('faker');
const jsonfile = require('jsonfile')

const total = 100;

const file = {
    prefix: './public/json/users_',
    suffix: '.json'
}

const filters = [
  'id',
  'name',
  'age',
  'gender'
]

const save2Json = function(path, contents){
  jsonfile.writeFile(path, {data: contents}, (err) => {
    if(err) console.error(err);
    else console.log("Saved to", path);
  })
}

const iterator = new Array(total).fill(); // How many users to generate?
let users = {
  data: null
}

users = iterator.map((_, id) => {

  const gender = faker.random.number(1);

  let user = {
    id:     id,
    name:   faker.name.firstName(gender) + ' ' + faker.name.lastName(gender),
    age:    faker.random.number(80),
    gender: gender === 0 ? 'male' : 'female'
  };

  return user;
});

filters.forEach((sorting, i) => {

  let sorted = Array.from(users);

  console.log(sorting);

  sorted.sort((a, b) => {

    if(typeof a[sorting] === 'string'){
      const valA = a[sorting].toUpperCase();
      const valB = b[sorting].toUpperCase();
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0
    }
    else if(typeof a[sorting] === 'number'){
      return a[sorting] - b[sorting];
    }
    else{
      return 0;
    }
  });

  console.log(sorted);

  save2Json(`${file.prefix}${sorting}_asc${file.suffix}`, sorted);
  sorted.reverse();
  save2Json(`${file.prefix}${sorting}_desc${file.suffix}`, sorted);


});