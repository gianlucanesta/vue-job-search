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

const axios = require('axios')
const url = 'http://localhost:5000/jobs'

const fetchJobsV1 = () => {
  axios.get(url).then((response) => {
    console.log('🚀 ~ file: playground.js:39 ~ response.data', response.data)
  })
}

const fetchJobsV2 = async () => {
  const response = await axios.get(url)
  console.log('🚀 ~ file: playground.js:39 ~ response.data', response.data)
}

// fetchJobsV2()

const sushi = ['Tuna', 'Salmon', 'Yellowtail', 'Eel', 'Shrimp', 'Octopus', 'Uni']

console.log(sushi.slice(2, 4))

const numbers = new Set()
numbers.add(5)
numbers.add(10)
numbers.add(15)

numbers.add(5)
numbers.add(15)
numbers.add(25)

console.log(numbers)

const { ref, computed } = require('vue')

let a = ref(1)
let b = ref(2)

const c = computed(() => a.value + b.value)
console.log('c', c.value)

a.value = 8

console.log('c', c.value)
