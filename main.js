import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const sum = (a, b) => a + b 
console.log(sum(5,9))

const testSum = (a, b) => {
  if(typeof(a) === Number && typeof(b) === Number) console.log('is correct a function')
  else console.warn('your function is incorrect')
}
testSum(sum(5,7))

const validateSum = ({ a, b, expected }) => {
  const result = sum(a, b)

  if (result === expected) {
    console.log('ok')
  }
}

validateSum({ a: 3, b: 5, expected: 8 }) // ok

const cube = (n) => n*n*n
console.log(cube(4))



document.querySelector('#app').innerHTML = `
   <h2>open inspect</h2>
`

// setupCounter(document.querySelector('#counter'))
