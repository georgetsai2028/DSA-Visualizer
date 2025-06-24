console.log('hello')

//list of array of numbers
const nums =[0, 1, 2, 3, 4, 5];

//Normal for loop that prints out nums in console
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

//Refactor the code to work with the DOM
const displayNums = document.querySelector("#arrayBox")
for (let i = 0; i < nums.length; i++){
    displayNums.innerHTML += `<h1>${nums[i]}</h1>`
}