
const BulletinsSeeder = require('./Bulletins')
const CoursesSeeder = require('./Courses')
const UserCoursesSeeder = require('./UserCourses')
const BooksSeeder = require('./Books')
const PastExamsSeeder = require('./PastExams')
const EventsSeeder = require('./Events')
const DiscussesSeeder = require('./Discusses')


const seeder = () => ({
  bulletins: BulletinsSeeder(10),
  courses: CoursesSeeder(500),
  user_courses: UserCoursesSeeder(10),
  books: BooksSeeder(100),
  past_exams: PastExamsSeeder(100),
  events: EventsSeeder(30),
  discusses: DiscussesSeeder(100)
})
module.exports = seeder
