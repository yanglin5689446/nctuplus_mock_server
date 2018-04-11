
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;

const Bulletin = () => ({
  id: ++increment,
  title: faker.random.words(2),
  type: faker.random.number()%2,
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
})

module.exports = Bulletin
