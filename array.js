console.log('hello')

//list of array of numbers
const nums =[0, 1, 2, 3, 4, 5];

//Normal for loop that prints out nums in console
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

const arrayIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12];

const displayIndex = document.querySelector("#arrayIndex");

arrayIndex.forEach((item, index) => {
    const arrayIndexs = document.createElement("div");
    arrayIndexs.textContent = item;
    arrayIndexs.style.padding = "10px";
    arrayIndexs.style.color = "blue";
    arrayIndexs.style.margin = "2px";
    arrayIndexs.style.border = "2px solid blue";

    displayIndex.appendChild(arrayIndexs);
});

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

//add insert function with onclick button

const insertButton = document.getElementById("insert");
const inputDiv = document.getElementById("sideDiv");


const newBox = document.createElement("div");
const insertDiv = document.createElement("div");
const numInsert = document.createElement("input");

inputDiv.appendChild(newBox);
newBox.appendChild(insertDiv);
insertDiv.appendChild(numInsert);


// Start hidden
newBox.style.display = "none";

insertButton.addEventListener("click", function(){

if (newBox.style.display === "none"){
    newBox.style.display = "flex";
    numInsert.style.display = "flex";
    insertDiv.style.display = "flex";
    insertDiv.style.backgroundColor = "pink";
}
else{
    newBox.style.display = "none";
    numInsert.style.display = "none";
    
}
    
})



