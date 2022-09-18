const db = require('../connections/heroko-pg.js')

const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name')
}
module.exports = {
 
}