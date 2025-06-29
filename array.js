//list of array of numbers
const nums =[0, 1, 2, 3, 4, 5];

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

function renderNums(){
//rerender and clear previous content
    displayNums.innerHTML = "";
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

})};

//add insert function with onclick button

const insertButton = document.getElementById("insert");
const inputDiv = document.getElementById("sideDiv");


const newBox = document.createElement("div");
const insertDiv = document.createElement("div");

inputDiv.appendChild(newBox);
newBox.appendChild(insertDiv);



// Start hidden
newBox.style.display = "none";

insertButton.addEventListener("click", function(){

if (newBox.style.display === "none"){
    newBox.style.display = "flex";
    inputDiv.style.display = "flex";
    numInput.style.display = "inline-block";
    indexInput.style.display= "inline-block";
    insertDiv.style.display = "flex";
    insertDiv.style.backgroundColor = "pink";
}
else{
    inputDiv.style.display = "none";
    newBox.style.display = "none";
    numInput.style.display = "none";
    indexInput.style.display = "none";
    
}
    
})

//input function
let numbers = [];
const numInput= document.getElementById("numInput");
const indexInput = document.getElementById("indexInput");
const addButton = document.getElementById("addBtn");

addButton.addEventListener("click", function(){
    const index = Number(indexInput.value);
    const num = Number(numInput.value);
    if(index >= 0 && index <= nums.length && !isNaN(num)){
        nums.splice(index, 0, num);
        renderNums(); 
    }

    numInput.value = "";
    indexInput.value = "";
})

//remove function
const removeButton = document.getElementById("removeBtn");
