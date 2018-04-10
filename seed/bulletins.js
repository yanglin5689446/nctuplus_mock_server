
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

const BulletinsSeeder = (amount) => (
  Array(amount).fill(0).map((value, index) => ({
    id: index + 1,
    title: faker.random.words(2),
    type: faker.random.number(2),
    created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
    updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  }))
)

module.exports = BulletinsSeeder
