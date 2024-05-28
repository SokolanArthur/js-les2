// Theory

//const array = [1, 2, 3, 5, 20, 42]
//const arrayStrings = ['a','b','c', null, 12]
//const array = new Array(1 ,2 ,3 ,5 ,20 ,42 )

//console.log(arrayStrings)
//console.log(array.length)
//console.log(array[0])
//console.log(array[3])
//console.group(array[10]) //undefined
//console.log(array[array.length - 1])
//array[0] = 'Privet!'
//console.log(array)
//array[array.length] = 'becon' // НЕ НАДО ИСПОЛЬЗОВАТь!

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = ['Сделать то', 'Сделать это']

function render() {
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()



createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
    inputElement.value = ''
}

function getNoteTemplate(title) {
    return `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>${title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
    `
}

//Object Theory

const person = {
    firstName: 'Sokolan',
    lastName: 'Arthur' ,
    year: 2005
}

//console.log(typeof person)
