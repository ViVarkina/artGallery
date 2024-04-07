// const createContainer=()=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("container")
//     // newDiv.id="divContainer"
//     return newDiv
// }
//
// document.body.append(createContainer())


import {imgSources} from "../img/index.js";


const imgContainer=(id, classList)=>{
    const container = document.createElement("div")
    container.classList.add("container")
    // classList.forEach((elem)=>{
    //     container.classList.add(elem)
    // })
    container.classList.add(classList)
    container.id = id
    return container
}


document.body.append(imgContainer("divContainerLeft"))
document.body.append(imgContainer("divContainerCenter", ["centering"]))
document.body.append(imgContainer("divContainerRight"))


const createCart =(src, className="imgCart")=>{
    const imgCart = document.createElement("img")
    imgCart.src= src
    imgCart.classList.add(className)
    imgCart.classList.add("card")
    return imgCart
}


document.getElementById("divContainerLeft").append(createCart(imgSources.img1))
document.getElementById("divContainerLeft").append(createCart(imgSources.img2))
document.getElementById("divContainerLeft").append(createCart(imgSources.img3))

document.getElementById("divContainerRight").append(createCart(imgSources.img4))
document.getElementById("divContainerRight").append(createCart(imgSources.img5))
document.getElementById("divContainerRight").append(createCart(imgSources.img6))

document.getElementById("divContainerCenter").append(createCart(imgSources.img7, "imgCartCenter"))
document.getElementById("divContainerCenter").append(createCart(imgSources.img8))
document.getElementById("divContainerCenter").append(createCart(imgSources.img9))

const cards = document.getElementsByClassName("card")

const closeModalWindow=(overlay)=>{
    console.log("закрыли")
    //удаляем эелемент
    overlay.remove()
}

const setNextImage=(even, image)=>{
    console.log("клик в лево")
    console.log(even.target.id)
    console.log(image)
    const imgArr = Object.values(imgSources)
    let index = +(Math.random()*10).toFixed(0)
    if(index >8){
        index = 8
    }
    image.src=imgArr[index]

}
const opeModalWindow=(even)=>{
    console.log("клик", even.target)
    //воздаем задний фон модал окна
    const overlay = document.createElement("div")
    overlay.classList.add("modalOverlay")

    //создаем тело модалки
    const modalBody = document.createElement("div")
    modalBody.classList.add("modalBody")

    //кнопка закрытия
    const closeButton = document.createElement("div")
    closeButton.classList.add("closeButton")
    closeButton.innerText = "x"
    closeButton.id="closeModalWindowButton"
    closeButton.addEventListener("click", ()=>{//передаем в функцию оргумент из другой функции(внутреней)
        closeModalWindow(overlay)
    })

    //картинка в модалке
    const image = document.createElement("img")
    image.src= even.target.src
    image.classList.add("modalBodyImg")
    modalBody.append(image)

    //кнопка перелистования
    const nextImg = document.createElement("div")
    nextImg.id = "next"
    nextImg.classList.add("nextImg")
    nextImg.innerText = ">"
    nextImg.addEventListener("click",(even)=> setNextImage(even, image))
    modalBody.append(nextImg)

    //добавляем кнопку в окно модал
    modalBody.append(closeButton)

    // засунули тело в фон
    overlay.append(modalBody)

    // засунули все в боди
    document.body.append(overlay)

}
console.log(cards)

for (const card of cards) {
    card.addEventListener("click", opeModalWindow)
}

