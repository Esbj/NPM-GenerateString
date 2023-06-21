import randomString from 'random-string-esb'
const div = document.querySelector("#random-string")

function generateString() {
  const button = document.createElement("button")
  const input = document.createElement("input")
  div.append(input, button)
  let string = ""
  input.setAttribute("placeholder", "Enter length of the string")
  button.innerText = "Generate string"
  button.addEventListener("click", () => {
    if (!input.value) {
      string = randomString(9)
    }
    else {
      string = randomString(Number(input.value))
    }
    const stringHolder = document.createElement("div")
    stringHolder.append(string)
    div.append(stringHolder)
  })
}
generateString()