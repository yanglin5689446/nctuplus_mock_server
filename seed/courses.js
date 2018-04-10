
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

const CoursesSeeder = (amount) => (
  Array(amount).fill(0).map((value, index) => ({
    id: index + 1,
    semester: '106上',
    department: '電工系',
    name: '電子學（一）',
    teachers: faker.name.findName(),
    credit: faker.random.number() % 5,
    course_time: '1GH4CD',
    grade: faker.random.number() % 4 + 1,
    created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
    updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  }))
)

module.exports = CoursesSeeder
