/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{ /* tc= tab content */
            tc.classList.remove('filtros__ativado')
        })
        target.classList.add('filtros__ativado')
    })
})

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/