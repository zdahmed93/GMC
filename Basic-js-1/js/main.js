let text = document.getElementById("gmc")

function makeTextItalic(){
    text.style.fontStyle = "Italic"
}
function makeTextBold(){
    text.style.fontWeight="bold"
}
function makeTextUnderline(){
    text.style.textDecoration="underline"
}
function changeSize(e){
    text.style.fontSize = e.value 
}
function myFunction(e){
    text.style.fontFamily = e.value
}