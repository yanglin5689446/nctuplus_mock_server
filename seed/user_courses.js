
let faker = require('faker')
faker.locale = 'zh_TW'

const coursesSeeder = (amount) => (
  new Array(amount).fill(0).map((value, index) => ({
    id: index + 1,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  }))
)

module.exports = coursesSeeder
