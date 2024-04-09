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

const { faColumns } = require('@fortawesome/free-solid-svg-icons')
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

const { ref, computed, reactive, toRef, toRefs } = require('vue')

let a = ref(1)
let b = ref(2)

const c = computed(() => a.value + b.value)
console.log('c', c.value)

a.value = 8

console.log('c', c.value)

const name = ref('Boris')

const title = computed(() => name.value + ' - the Great')

console.log('title: ', title.value)

name.value = 'Alex'

console.log('title: ', title.value)

const person = ref({
  name: 'Boris'
})

const title2 = computed(() => person.value.name + ' - the Best')

console.log('title2: ', title2.value)

person.value.name = 'Alex'

console.log('title2: ', title2.value)

const person2 = reactive({
  name: 'Boris'
})

const title3 = computed(() => person2.name + ' - the Top')

console.log('title3: ', title3.value)

person2.name = 'Alex'

console.log('title3: ', title3.value)

const person3 = reactive({
  firstName: 'Boris',
  lastName: 'Perez'
})

const fullName = computed(() => {
  return `${person3.firstName} ${person3.lastName} - the King`
})

console.log(fullName.value)

person3.firstName = 'Alex'
person3.lastName = 'Garcia'

console.log(fullName.value)

const fullNameLength = computed(() => {
  return fullName.value.length
})

console.log(fullNameLength.value)

person3.firstName = 'Robert'
person3.lastName = 'Smith'

console.log(fullName.value)
console.log(fullNameLength.value)

const { firstName, lastName } = person3

const fullName2 = computed(() => {
  return `${firstName} ${lastName} - the King`
})

console.log(fullName2.value)

person3.firstName = 'Alex'
person3.lastName = 'Garcia'

console.log(fullName2.value)

const firstName2 = toRef(person3, 'firstName')
const lastName2 = toRef(person3, 'lastName')

const fullName3 = computed(() => {
  return `${firstName2.value} ${lastName2.value} - the King`
})

console.log(fullName3.value)

person3.firstName = 'Frank'
person3.lastName = 'Jones'

console.log(fullName3.value)

const { firstName: firstName3, lastName: lastName3 } = toRefs(person3)

const fullName4 = computed(() => {
  return `${firstName3.value} ${lastName3.value} - the King`
})

console.log(fullName4.value)

person3.firstName = 'Alex'
person3.lastName = 'Garcia'

console.log(fullName4.value)

const refPerson = toRefs(person3)

console.log(refPerson.firstName.value)
