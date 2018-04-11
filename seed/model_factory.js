
const model_factory = (model, amount) => 
  Array(amount)
  .fill(0)
  .map(m => model())
  .sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))

module.exports = model_factory