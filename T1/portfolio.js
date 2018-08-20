// init Isotope
var iso = new Isotope( '.portfolio__item-board', {
    itemSelector: '.item-board__item',
    layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.portfolio__filter');
filtersElem.addEventListener( 'click', function( event ) {
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
});

// change button_checked class on buttons
var buttonGroups = document.querySelectorAll('.portfolio__filter');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
        buttonGroup.querySelector('.filter__button_checked').classList.remove('filter__button_checked');
        event.target.classList.add('filter__button_checked');
    });
}
