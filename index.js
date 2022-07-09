const panels = document.querySelectorAll('.info-head')

panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
        panel.classList.toggle('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    
}



