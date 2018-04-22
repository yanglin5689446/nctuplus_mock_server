
const model_factory = require('./model_factory')
const faker = require('faker')

const Bulletin = require('./Bulletin')
const Course = require('./Course')
const User = require('./User')
const Book = require('./Book')
const PastExam = require('./PastExam')
const Event = require('./Event')
const Comment = require('./Comment')

const seeder = () => ({
  bulletins: model_factory(Bulletin, 15),
  courses: model_factory(Course, 500).sort((a, b) => a.semester > b.semester),
  users: model_factory(User, 10),
  books: model_factory(Book, 100),
  past_exams: model_factory(PastExam, 100),
  events: model_factory(Event, 80),
  comments: model_factory(Comment, 100),
  login: [{ token: faker.internet.password() }],
})
module.exports = seeder
