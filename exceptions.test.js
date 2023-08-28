const { default: expect } = require("expect")
const functionError = require("./exceptions")

test('i am error', ()=>{
  expect(()=>functionError()).toThrow()
})