
const faker = require('faker')
const moment = require('moment')

const factory = require('./model_factory')
const Course = require('./Course')
const Event = require('./Event')

faker.locale = 'zh_TW'

let increment = 0;

const User = () => ({
  id: ++increment,
  name: faker.name.findName(),
  year: faker.random.number() % 8 + 99,
  email: faker.internet.email(),
  collections: factory(Course, faker.random.number()%20),
  events: factory(Event, faker.random.number()%20), 
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
})


module.exports = User