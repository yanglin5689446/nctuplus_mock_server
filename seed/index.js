
const bulletinsSeeder = require('./bulletins')
const coursesSeeder = require('./courses')
const userCoursesSeeder = require('./userCourses')

const seeder = () => ({
  bulletins: bulletinsSeeder(100),
  courses: coursesSeeder(100),
  userCourses: userCoursesSeeder(100),
  
})
console.log(JSON.stringify(seeder()))
module.exports = seeder
