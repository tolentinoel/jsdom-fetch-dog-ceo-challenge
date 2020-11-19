// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    console.log("hi")
    fetchImage()
    fetchBreed() 
    changeColor()
})

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json)

            renderImage(json)
        }
        )
}

function renderImage(json) {
    json.message.map(image => {
        addImage(image)
    })
}

function addImage(image) {
    // grab dog image div
    const dogImg = document.querySelector("#dog-image-container")

    // create a div for each image and an image tag
    const div = document.createElement("div")
    const imgTag = document.createElement("img")

    //set the source for imgtag as our individual images
    imgTag.setAttribute('src', image)
    imgTag.setAttribute('width', '300px')

    //appends each image to its own div
    dogImg.appendChild(div)
    div.appendChild(imgTag)
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then((resp) => resp.json())
        .then((json) => renderBreed(json)
        )
}

function renderBreed(json) {
    const breedArr = Object.keys(json.message)
    breedArr.map(breed => {
        addBreed(breed)
    })
}

function changeColor() {
    const ul = document.querySelector("#dog-breeds")
    ul.addEventListener("click", event => {
        event.target.style.color = 'blue';
    })
}

function addBreed(breed) {
    const ul = document.querySelector("#dog-breeds")
    //grab ul from html
    //create li
    const li = document.createElement("li")
    li.innerText = breed
    ul.appendChild(li)
}

function sortBreed(){
    const dropdown = document.querySelector("#breed-dropdown")
    const optionA = document.querySelector(option[value="a"])
    const optionB = document.querySelector(option[value="b"])
    const optionC = document.querySelector(option[value="c"])
    const optionD = document.querySelector(option[value="d"])
    const li = document.querySelectorAll('li')

    dropdown.addEventListener("click", () => {
        if (optionA.innerText.startsWith("a"))
            return li.innerText.startsWith("a")
            //a list with all of the innertext starting with A
    })
}
