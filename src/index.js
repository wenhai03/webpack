let str = require('./a.js')
import './index.css'

console.log('str -> ', str)
document.getElementById('app').innerHTML = str
console.log('  六六六 -> ', )

if (module.hot) {
  module.hot.accept()
}