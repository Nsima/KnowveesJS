let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Nsima',
  role: 'Programmer',
  country: 'Nigeria'
}
let userTwo = {
  name: 'Nsima',
  role: 'Programmer',
  country: 'Nigeria'
}
console.log(userOne == userTwo) // false

let numbers = nums
console.log(nums == numbers)  // true

let userOne = {
name:'Nsima',
role:'Programmer',
country:'Nigeria'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true