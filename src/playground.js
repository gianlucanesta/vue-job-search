// const developer = {
//   salary: 100000,
//   experience: 4.5,
//   techStack: ['Vue', 'Html', 'Css'],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2
//     this.lookingForWork = false
//   }
// }
// console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.salary)
// console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.lookingForWork)

// developer.doubleSalary()

// console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.salary)
// console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.lookingForWork)

// using the command --> node src/playground.js
// you can visualize the console.log on the terminal

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

export const multiply = (num1, num2) => num1 * num2
