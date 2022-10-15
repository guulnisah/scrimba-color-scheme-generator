const colorSelect = document.querySelector('#color-input')
const schemeSelect = document.querySelector('#scheme-options')
const submitBtn = document.querySelector('#submit-button')
const colorContents = document.querySelectorAll('.color-content')
const colorCodes = document.querySelectorAll('.color-code')
const colorsContainer = document.querySelector('.container__colors')

submitBtn.addEventListener('click', async () => {
    const schemeValue = schemeSelect.options[schemeSelect.selectedIndex].value
    const colorValue = colorSelect.value.slice(1, 7);

    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeValue}&count=5`)
    const data = await response.json()

    colorContents.forEach((elem, index) => {
        let color = data.colors[index]
        elem.style.backgroundColor = color.hex.value
    })
    colorCodes.forEach((elem, index) => {
        let color = data.colors[index]
        elem.textContent = color.hex.value
    })
});

colorsContainer.addEventListener('click', (e) => {
    if (e.target.matches('.color-content')) {
        const hexCode = e.target.parentNode.querySelector('p').innerText
        navigator.clipboard.writeText(hexCode).then(() => {
            alert('Successfully copied the color.')
        })
    }
})