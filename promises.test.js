const promisesFunction = require("./promises")

test('your promise is not correct', async ()=>{
  const data = await promisesFunction()
  const rest = await data.json()
  console.log(rest)
  expect(rest.value).toBeTruthy()
})

