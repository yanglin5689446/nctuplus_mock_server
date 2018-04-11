
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;

const Comment = () => ({
  id: ++increment,
  course: faker.random.word(2),
  teacher: faker.name.findName(),
  title: faker.random.word(3),
  content: faker.lorem.paragraph(),
  user: {
    id: faker.random.number(),
    name: faker.name.findName()
  },
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  sub_comments: [],
})


module.exports = Comment
