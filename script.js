const colorInput = document.querySelector('#color-input')
const schemeSelect = document.querySelector('#scheme-options')
const submitBtn = document.querySelector('#submit-button')
const colorContents = document.querySelectorAll('.color-content')
const colorCodes = document.querySelectorAll('.color-code')
const colorBoxes = document.querySelectorAll('.color-box')

submitBtn.addEventListener('click', (e) => {
    const schemeValue = schemeSelect.options[schemeSelect.selectedIndex].value
    const colorValue = colorInput.value.slice(1, 7);

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeValue}&count=5`)
        .then((response) => response.json())
        .then((data) => {

            colorContents.forEach((elem, index) => {
                let color = data.colors[index]
                elem.style.backgroundColor = color.hex.value
            })

            colorCodes.forEach((elem, index) => {
                let color = data.colors[index]
                elem.textContent = color.hex.value
            })

        });
})

colorBoxes.forEach((elem) => {
    elem.addEventListener('click', () => {
        navigator.clipboard.writeText(elem.querySelector('p').innerText).then(() => {
            console.log('copied')
        })
    })
})
