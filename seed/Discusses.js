
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

const DiscussesSeeder = (amount) => (
  Array(25).fill(0).map((value, index) => ({
    id: index + 1,
    course: faker.random.word(2),
    teacher: faker.name.findName(),
    title: faker.random.word(3),
    user: {
        id: faker.random.number(),
        name: faker.name.findName()
    },
    created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
    updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  }))
)

module.exports = DiscussesSeeder
