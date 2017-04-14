var assert = require('assert')

module.exports = assertEquals

function assertEquals (actual, expected) {
  try {
    assert.deepStrictEqual(actual, expected)
  } catch (e) {
    console.error('Comparison failed!')
    console.error('actual:', actual)
    console.error('---------')
    console.error('expected:', expected)
    console.error('---------')
    throw e
  }
}
