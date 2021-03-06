
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;

const PastExam = () => ({
  id: ++increment,
  course: faker.random.word(2),
  semester: '100上',
  teacher: faker.name.findName(),
  file_name: faker.random.word(1) + '.jpg',
  file_url: 'http://placeimg.com/400/400/any',
  title: faker.random.word(3),
  user: {
    name: faker.name.findName(),
  },
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
})


module.exports = PastExam