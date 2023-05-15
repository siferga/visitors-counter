//Initialize to 0

//listen for clicks on the increment btn

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//console.log(countEl)
let count = 0

function increment() {

    count += 1
    countEl.textContent = count
    // console.log(count)

}

function save() {

    // 2. Create a variable that contains both the count and the dash
    let countString = count + " - "
    // 3. Render the variable in the saveEl using innerText
    // saveEl.innerText += countString
    saveEl.textContent += countString
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}







