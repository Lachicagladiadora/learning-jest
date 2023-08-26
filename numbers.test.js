const { default: expect } = require("expect")
const varNumb = require("./numbers")
// const { test } = require("picomatch")

test('sure, the function is correctly', ()=> {
  expect(varNumb(2, 7)).toBeGreaterThan(7) // 7<2*7
  expect(varNumb(3,9)).toBeGreaterThanOrEqual(27) // 27<=3*9
  expect(varNumb(2,6)).toBeLessThan(33) //33>2*6
  expect(varNumb(3,2)).toBeLessThanOrEqual(6) //6>=3*2
  // toBe & toEqual => equivalent for numbers
  expect(varNumb(3,8)).toBe(24)
  expect(varNumb(23,3)).toEqual(69)
})

test('adding floating point numbers', ()=> {
  expect(varNumb(2.7,3.6)).toBeCloseTo(9.72)
})