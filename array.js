console.log('hello')

//list of array of numbers
const nums =[0, 1, 2, 3, 4, 5];

//Normal for loop that prints out nums in console
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

//Refactor the code to work with the DOM
const displayNums = document.querySelector("#arrayBox")



nums.forEach((item, index) => {
    //create html element for each array item
    const arrayBorder = document.createElement("div");
    arrayBorder.textContent = item;

    //apply css border styling
    arrayBorder.style.border = "2px solid black";
    arrayBorder.style.padding = "10px";
    arrayBorder.style.margin = "2px";

    //append arrayBorder to html container
    displayNums.appendChild(arrayBorder);
});
