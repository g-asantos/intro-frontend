const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function () {
        const siteID = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${siteID}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})








document.querySelector('.maximize-modal').addEventListener('click', function () {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize');
        
    } else {
        modal.classList.add('maximize');
        modalOverlay.querySelector('iframe').style.height = '100%';
        modalOverlay.querySelector('iframe').style.width = '100%';
        modalOverlay.querySelector('iframe').style.top = '0px';
        modalOverlay.querySelector('iframe').style.left = '0px';
    }
    
})


