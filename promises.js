// Promises
async function promisesFunction (){
  const data = await fetch("https://api.chucknorris.io/jokes/random")
  return data
}
module.exports = promisesFunction