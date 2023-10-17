const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['Vue', 'Html', 'Css'],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2
    this.lookingForWork = false
  }
}
console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.salary)
console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.lookingForWork)

developer.doubleSalary()

console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.salary)
console.log('🚀 ~ file: playground.js:7 ~ developer:', developer.lookingForWork)

// using the command --> node src/playground.js
// you can visualize the console.log on the terminal
