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

games_names_elem.style = `width:${(games_names.length + 1)*100}vw;`;


function generate() {
    for (i = 0; i < games_names.length; i++) {
        games_names_elem.innerHTML += `<h2><a href="../games/${games_names[i]}/index.html">${games_names[i]}</a></h2>`;
    }
}

function scroller() {
    console.log('lol');
}