// init Isotope
const iso = new Isotope( '.portfolio__item-board', {
    itemSelector: '.item-board__item',
    layoutMode: 'fitRows'
});

// bind filter button click
const filtersElem = document.querySelector('.portfolio__filter');
filtersElem.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, '.filter__button' ) ) {
            return;
    }
    const filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
});

// change button_checked class on buttons
const buttonGroups = document.querySelectorAll('.portfolio__filter');
for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
    const buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
        if ( !matchesSelector( event.target, '.filter__button' ) ) {
            return;
        }
        buttonGroup.querySelector('.filter__button_checked').classList.remove('filter__button_checked');
        event.target.classList.add('filter__button_checked');
    });
}
