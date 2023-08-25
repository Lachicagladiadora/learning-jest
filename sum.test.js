const sum = require('./sum')

test('first test: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('sum is different of zero ', ()=>{
  expect(sum(4,9)).not.toBe(0)
})
