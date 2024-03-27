const number = [1, 2, 3, 4, 5]
const names = ['Gianluca', 'Marco', 'Giovanni', 'Antonio']

// const squares = number.map((number) => {
//   return number * number
// })

const squares = number.map((number) => number * number)
console.log('🚀 ~ file: playground.js:6 ~ squares ~ squares:', squares)

const lowerCaseName = names.map((name) => {
  return name.toLowerCase()
})
console.log('🚀 ~ file: playground.js:12 ~ lowerCaseName ~ lowerCaseName:', lowerCaseName)

const favouriteFood = 'sushi'

const goodFood = {
  favouriteFood: true
}

console.log(goodFood)

setTimeout(() => {
  console.log('I will print 2 seconds after the program starts')
}, 2000)

const interval = setInterval(() => {
  console.log('I will print every 2 seconds after the program starts')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 10000)
