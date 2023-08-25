const { default: expect } = require('expect')
const needNull = require('./truthiness')
const needDefined = require('./truthiness')

test("first test null", ()=>{
  // expect(needNull(null)).toBeNull()
  expect(needNull(null)).toBeDefined()
  expect(needNull(null)).not.toBeUndefined()
  // expect(needNull(null)).not.toBeTruthy()
  expect(needNull(null)).not.toBeFalsy()
})

test('second test defined', ()=>{
  expect(needDefined(0)).not.toBeNull()
  expect(needDefined(0)).toBeDefined()
  expect(needDefined(0)).not.toBeUndefined()
  // expect(needDefined(0)).not.toBeTruthy()
  // expect(needDefined(0)).toBeFalsy()
})