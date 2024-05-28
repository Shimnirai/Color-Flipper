let wrap = document.getElementById("wrap")
let Color = document.getElementById("color-Flipper")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function ChangeBg(){
    let hexColor = '#'
    for(i=1;i<=6;i++){
        hexColor = hexColor + hexValue()
    }
    wrap.style.backgroundColor = hexColor
    Color.innerHTML = hexColor
}

function hexValue(){
    let ranNum = Math.floor(Math.random()*16)
    return hex[ranNum]
}
console.log(hexValue())






