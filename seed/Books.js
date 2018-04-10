
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

const BooksSeeder = (amount) => (
  Array(amount).fill(0).map((value, index) => ( {
    id: index + 1,
    name: faker.random.words(2),
    author: faker.name.findName(),
    course: faker.random.words(2),
    teacher: faker.name.findName(),
    seller: {
        name: faker.name.findName(),
    },
    preview_img: 'http://placeimg.com/150/170/any',
    price: faker.random.number() % 1000,
    sold: faker.random.boolean(),
    sold_time: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
    created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
    updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss')
  }))
)

module.exports = BooksSeeder
