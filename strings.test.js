const { default: expect } = require("expect")
const varString = require("./strings")

test('great, print a string', ()=>{
  const string = 'hello string'
  expect(varString(string)).toMatch(/hello string/)
})