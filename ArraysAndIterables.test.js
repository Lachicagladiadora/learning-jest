const varArray = require("./ArraysAndIterables")

test('fine, is it an array', ()=>{
  const array = [2,84,23]
  expect(varArray(array)).toContain(23)
  expect(new Set(varArray(array))).toContain(23)
})