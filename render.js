const UrlPattern = require('url-pattern')

const render = (req, res) => {
  const originalUrl = req.originalUrl
  const originalMethod = req.originalMethod

  const patternToWrap = [{
      method: 'GET',
      regex: new UrlPattern('/api/events')
    }, {
      method: 'POST',
      regex: new UrlPattern('/api/events')
    }, {
      method: 'PATCH',
      regex: new UrlPattern('/api/events/:event_id')
    }, {
      method: 'DELETE',
      regex: new UrlPattern('/api/events/:event_id')
    }, {
      method: 'GET',
      regex: new UrlPattern('/api/users/events')
    }, {
      method: 'POST',
      regex: new UrlPattern('/api/users/events')
    }, {
      method: 'DELETE',
      regex: new UrlPattern('/api/users/events/:event_id')
    }]

  let found = patternToWrap.find((pattern) => {
    if (originalMethod !== pattern.method)
      return false
    if (pattern.regex.match(originalUrl) == null)
      return false
    return true
  })

  if (found) {
    res.jsonp({
      result: "success",
      data: res.locals.data
    })
  } else {
    res.jsonp(res.locals.data)
  }
}

module.exports = render
