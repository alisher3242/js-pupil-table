// import dataBase from "../API/data.js"

const dataBase = []
let storage = window.localStorage;
let data = JSON.parse(storage.getItem("keys")) ?
    JSON.parse(storage.getItem("keys")) : dataBase;

let ismi = document.querySelector("#input_name")
let familiya = document.querySelector("#input_familiya")
let guruh = document.querySelector("#input_guruh")
let jinsi = document.querySelector("#input_jinsi")
let forma = document.querySelector(".forma")
let tbody = document.querySelector("#tbody")

const render = (arr, element) => {
    arr.forEach(todo => {
        const TR = document.createElement("tr")
        const TD1 = document.createElement("td")
        TD1.textContent = todo.ismi;
        TR.append(TD1)

        const TD2 = document.createElement("td")
        TD2.textContent = todo.familiya;
        TR.append(TD2)

        const TD3 = document.createElement("td")
        TD3.textContent = todo.guruh;
        TR.append(TD3)

        const TD4 = document.createElement("td")
        TD4.textContent = todo.jinsi;
        TR.append(TD4)

        element.append(TR)
        ismi.value = ""
        familiya.value = ""
        guruh.value = ""
        jinsi.value = ""
    });
}


forma.addEventListener("submit", (event) => {
    event.preventDefault();
    if (ismi.value.length < 3 || familiya.value.length < 3 || guruh.value.length < 3 || jinsi.value.length < 3) {
        alert("Kiritgan ma'lumotingizning belgilari 3tadan ko'proq bo'lishi kerak!")
        return
    } else {
        let ismValue = ismi.value,
            famValue = familiya.value,
            grValue = guruh.value,
            genderValue = jinsi.value

        let datas = {
            ismi: ismValue,
            familiya: famValue,
            guruh: grValue,
            jinsi: genderValue
        }

        dataBase.push(datas)

        tbody.innerHTML = null;
        ismValue = null
        famValue = null
        grValue = null
        genderValue = null

        let alertVar = alertFunc()
        data.push(alertVar)
        render(dataBase, tbody)
        storage.setItem("keys", JSON.stringify(data))
    }

})