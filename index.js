const allBackgroundElements = document.querySelectorAll('input, [tabindex="0"]')
const allButtons = document.querySelectorAll('button, [tabindex="0"]')

function timeOut() {
    document.getElementById('formOverlay').classList.add('visible');
    for (const element of allBackgroundElements) {
        element.setAttribute('tabindex', "-1")
    }
    for (const element of allButtons) {
        element.setAttribute('tabindex', "-1")
    }
}

function closeModal(){
    document.getElementById('formOverlay').classList.remove('visible');
    window.clearTimeout(windowTimeout);
    window.setTimeout(timeOut, 1000);
}

function clickBody(){
    document.body.addEventListener("click", closeModal);
}

function clickModalButton(){
    document.getElementByID('modalClose').addEventListener("click", closeModal);
}

let windowTimeout = window.setTimeout(timeOut, 1000);

clickBody();