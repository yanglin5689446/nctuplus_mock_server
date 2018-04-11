
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;

const Events = () => ({
  id: ++increment,
  start_time: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  end_time: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  title: faker.random.word(3),
  organizer: faker.random.word(3),
  location: faker.address.county(),
  poster: 'http://placeimg.com/400/300/any',
  description: faker.lorem.paragraph(),
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss')
})

module.exports = Events
