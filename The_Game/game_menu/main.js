// variables globales :
var games_names = [
    'Ana',
    'Colin',
    'Dany',
    'Esteban',
    'Evan',
    'Joana',
    'Lucien',
    'Marion',
    'Phoenix',
    'Robin',
    'Tamara'
];
var games_names_elem = document.getElementsByClassName('games_names')[0];



// generation :
generate();


function generate() {
    for (i = 0; i < games_names.length; i++) {
        games_names_elem.innerHTML += `<h1>${games_names[i]}</h1>`;
    }
}

function scroller() {
    console.log('lol');
}