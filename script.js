const elmas = document.querySelector(".gems-photo")
const gemsAmount = document.querySelector(".gems-amount")
const imgs = document.querySelectorAll("img")
imgs.forEach((img) => {
    img.setAttribute("draggable", false)
})
let sayi = 0
let para = 0
let eldeNeVar = "yumruk"
let ownedItem2 = []
let itemMiktari = 0

let ownedNumber = elmas.addEventListener("click", (e) => {
    const wrapper = document.createElement("div")
    wrapper.className = "plus-one-wrapper"

    let plusOne = document.createElement("div")
    plusOne.classList.add("plus-one")

    if (eldeNeVar == "yumruk") {
        plusOne.innerText = "+1"
        para = para + 1
    } else if (eldeNeVar == "woodenpickaxe") {
        plusOne.innerText = "+4"
        para = para + 4
    } else if (eldeNeVar == "stonepickaxe") {
        plusOne.innerText = "+6"
        para = para + 6
    } else if (eldeNeVar == "ironpickaxe") {
        plusOne.innerText = "+8"
        para = para + 8
    } else if (eldeNeVar == "goldenpickaxe") {
        plusOne.innerText = "+10"
        para = para + 10
    } else if (eldeNeVar == "diamondpickaxe") {
        plusOne.innerText = "+15"
        para = para + 15
    }
    wrapper.style.left = e.pageX + "px"
    wrapper.style.top = e.pageY + "px"

    plusOne.style.left = `${e.pageX}px`
    plusOne.style.top = `${e.pageY}px`
    wrapper.appendChild(plusOne)
    document.body.appendChild(wrapper)

    setTimeout(() => {
        wrapper.remove()
    }, 1000)
    gemsAmount.innerText = para
})

let items = document.querySelectorAll(".items-div")
let eldekiItem = document.querySelector(".using-item")

items.forEach((item) => {
    item.addEventListener("click", () => {
        let dataItem = item.getAttribute("data-item")
        let dataPrice = item.getAttribute("data-price")

        if (para >= dataPrice) {
            para = para - dataPrice
            gemsAmount.innerText = para
            eldeNeVar = dataItem
            eldekiItem.innerText = eldeNeVar
        }
    })
})

let items2 = document.querySelectorAll(".items2-div")
let ownedItems = document.querySelector(".owned-items")

let araba = document.getElementById("araba")
let sporAraba = document.getElementById("spor-araba")
let ev = document.getElementById("ev")
let yat = document.getElementById("yat")
let helikopter = document.getElementById("helikopter")

items2.forEach((item) => {
    item.addEventListener("click", () => {
        let dataItem = item.getAttribute("data-name")
        let dataPrice = item.getAttribute("data-price")

        if (para >= dataPrice) {
            para = para - dataPrice
            gemsAmount.innerText = para

            setInterval(() => {
                if (dataItem == "Araba") {
                    para += 10
                } else if (dataItem == "Spor Araba") {
                    para += 25
                } else if (dataItem == "Ev") {
                    para += 50
                } else if (dataItem == "Yat") {
                    para += 150
                } else if (dataItem == "Helikopter") {
                    para += 250
                }
                gemsAmount.innerText = para
            }, 1000)

            let ownedItem = document.querySelector(".owned-item")
            ownedItem2.push(dataItem)

            let sayi = ownedItem2.filter((x) => x === dataItem).length

            if (dataItem == "Araba") {
                araba.innerText = `Araba: ${sayi}`
            } else if (dataItem == "Spor Araba") {
                sporAraba.innerText = `Spor Araba: ${sayi}`
            } else if (dataItem == "Ev") {
                ev.innerText = `Ev: ${sayi}`
            } else if (dataItem == "Yat") {
                yat.innerText = `Yat: ${sayi}`
            } else if (dataItem == "Helikopter") {
                helikopter.innerText = `Helikopter: ${sayi}`
            }
        }
    })
})
