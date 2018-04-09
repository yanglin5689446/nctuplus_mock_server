
let faker = require('faker')
faker.locale = 'zh_TW'

const coursesSeeder = (amount) => (
  new Array(amount).fill(0).map((value, index) => ({
    id: index+1,
    semester: '106上',
    department: '電工系',
    name: '電子學（一）',
    teachers: '陳龍英',
    credit: '3',
    course_time: '1GH4CD',
    grade: '2'
  }))
)

module.exports = coursesSeeder
