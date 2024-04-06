// const createContainer=()=>{
//     const newDiv = document.createElement("div")
//     newDiv.classList.add("container")
//     // newDiv.id="divContainer"
//     return newDiv
// }
//
// document.body.append(createContainer())

const divLeftElement=()=>{
    const divLeftElement = document.createElement("div")
    divLeftElement.classList.add("container")
    divLeftElement.id = "divContainerLeft"
    return divLeftElement
}
const divCenterElement=()=>{
    const newCenterDiv = document.createElement("div")
    newCenterDiv.classList.add("centering")
    newCenterDiv.classList.add("container")
    newCenterDiv.id = "divContainerCenter"
    return newCenterDiv
}

// const sectionsDivCenter=()=>{
//     const
// }

const divRightElement=()=>{
    const divRightElement = document.createElement("div")
    divRightElement.classList.add("container")
    divRightElement.id = "divContainerRight"
    return divRightElement
}


document.body.append(divLeftElement())
document.body.append(divCenterElement())
document.body.append(divRightElement())


const imgCarts =()=>{
    const imgCart = document.createElement("div")
    imgCart.classList.add("imgCart")
    return imgCart
}

const imgCartsCenter =()=>{
    const imgCartCenter = document.createElement("div")
    imgCartCenter.classList.add("imgCartCenter")
    return imgCartCenter
}

document.getElementById("divContainerLeft").append(imgCarts())
document.getElementById("divContainerLeft").append(imgCarts())
document.getElementById("divContainerLeft").append(imgCarts())

document.getElementById("divContainerRight").append(imgCarts())
document.getElementById("divContainerRight").append(imgCarts())
document.getElementById("divContainerRight").append(imgCarts())

document.getElementById("divContainerCenter").append(imgCartsCenter())
document.getElementById("divContainerCenter").append(imgCarts())
document.getElementById("divContainerCenter").append(imgCarts())