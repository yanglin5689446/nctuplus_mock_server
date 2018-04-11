
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;

const Course = () => ({
  id: ++increment,
  semester: `${faker.random.number()%8+99}${faker.random.boolean ? '上' : '下'}`,
  department: faker.random.word(),
  name: faker.random.word(),
  teachers: faker.name.findName(),
  credit: faker.random.number() % 5,
  requirement: '必修',
  category: faker.random.word(),
  course_time: '1GH4CD',
  classroom: 'EDB27',
  grade: faker.random.number() % 4 + 1,
  current_enroll: faker.random.number() % 250,
  max_enroll: faker.random.number() % 250,
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
})


module.exports = Course
