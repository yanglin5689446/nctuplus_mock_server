
const faker = require('faker')
const moment = require('moment')

faker.locale = 'zh_TW'

let increment = 0;
let event_types = ['校友週', '講座', '表演', '擺攤', '比賽', '其他']

const Events = () => ({
  id: ++increment,
  user_id: faker.random.number({min:0, max:increment}),
  event_type: event_types[faker.random.number(6)],
  title: faker.random.word(faker.random.number(25)+3),
  organization: faker.random.word(faker.random.number(10)+2),
  location: faker.address.county(),
  url: "https://www.facebook.com/events/1700393116905977/",
  content: faker.lorem.paragraph(),
  begin_time: moment(faker.date.between('2017-01-01', '2018-12-31')).format('YYYY/MM/DD hh:mm:ss'),
  end_time: moment(faker.date.between('2017-01-01', '2018-12-31')).format('YYYY/MM/DD hh:mm:ss'),
  view_times: faker.random.number(10000),
  attendances_count: faker.random.number(10000),
  event_follows_count: faker.random.number(10000),
  poster: 'http://placeimg.com/400/300/any',
  created_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss'),
  updated_at: moment(faker.date.past()).format('YYYY/MM/DD hh:mm:ss')
})

module.exports = Events
