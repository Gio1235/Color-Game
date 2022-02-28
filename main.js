var selectedRandomColor;
var errorClickCounter = -1;
const startGamebtn = document.querySelector("#StartGame");
const colorBoxesCont = document.querySelectorAll(".color-box");
const selectedColorP = document.querySelector("#selectedColor");
const answerBtn = document.querySelector("#answer");
const openModalBtn = document.querySelector("#openModal");

startGamebtn.addEventListener("click", function(){
    errorClickCounter =3;
    var randomColors = createDynamicRgbColors();
    setDynamicColorstoBoxes(colorBoxesCont, randomColors);
    selectedRandomColor = getSelectedrandColor(randomColors);
    selectedColorP.textContent = selectedRandomColor;

});


 colorBoxesCont.forEach(o => {
     o.addEventListener("click", function(){
         if (errorClickCounter < 0){return;}
        var thisBtnColor = this.style.background.split(", ").join();
        if(thisBtnColor == selectedRandomColor){
            answerBtn.textContent = "True";
            answerBtn.classList.add("btn-success");
            answerBtn.classList.remove("btn-danger");
            openModal.click();
        }else{
            answerBtn.textContent = "False";
            answerBtn.classList.remove("btn-success");
            answerBtn.classList.add("btn-danger");
            o.style.display = "none";
            errorClickCounter--;
        }
        if(errorClickCounter == 0){
            window.location.reload();
        }

     });

 });

 function onPlayAgainClick(){
    window.location.reload();
 }

function getSelectedrandColor(randColCollection){
   var randIndex = Math.floor(Math.random()*randColCollection.length);
    var randColor = randColCollection[randIndex];
    return randColor;
}

function setDynamicColorstoBoxes(collection, randomColors){

    for(var i =0; i< collection.length; i++){
        collection[i].style.background = randomColors[i];
    }

}


function createDynamicRgbColors(){
    var colors = new Array();
    while(colors.length <= 6){
        colors.push(getDynamicRgb());
    }

    return colors;
}

function getDynamicRgb(){
    var red = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}