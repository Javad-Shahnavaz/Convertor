

let btnClassConverter = document.querySelector(".convertButton")
let btnClassreset = document.querySelector(".resetButton")
let btnClasschange = document.querySelector(".changeButton")
let inputGet = document.getElementById("converter")

let resultValuet = document.querySelector(".result")


let clickFlag = false
inputGet.value = ""


function onclickConverter(){
    if (inputGet.value === "" ){
        resultValuet.innerHTML = " Inser Correct value"
        resultValuet.style.color = "#993300"
    }else{
        if(clickFlag){
            let convertValue = ((+inputGet.value - 32) * 5 ) / 9 
            resultValuet.innerHTML = inputGet.value + " °F to " + convertValue.toFixed + "°C"
            resultValuet.style.color = "rgb(255, 255, 102)"
            
        }else{
            let convertValue = ((+inputGet.value * 9 ) /5) + 32
            resultValuet.innerHTML = inputGet.value + " °C to " + convertValue + "°F"
            resultValuet.style.color = "rgb(255, 255, 102)"
        }
        

    }
}


function onclickReset(){
    inputGet.value = ""
    resultValuet.innerHTML = ""
    
}

function onclickChange(){
    if (!clickFlag){
        let titleValue = document.querySelector("title")
        let classValueC = document.querySelector(".C")
        let classValueF = document.querySelector(".F")
        inputGet.placeholder = "°F"
        titleValue.innerHTML = "SalzLearn| Js | °F to °C"
        classValueC.innerHTML = "°F"
        classValueF.innerHTML = "°C"
        clickFlag = true
        
    }else{
        let titleValue = document.querySelector("title")
        let classValueC = document.querySelector(".C")
        let classValueF = document.querySelector(".F")
        inputGet.placeholder = "°C"
        titleValue.innerHTML = "SalzLearn| Js | °C to °F"
        classValueC.innerHTML = "°C"
        classValueF.innerHTML = "°F"
        clickFlag = false
    }
}

btnClassConverter.addEventListener("click", onclickConverter )
btnClassreset.addEventListener("click", onclickReset )
btnClasschange.addEventListener("click", onclickChange )
