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

let mic;

       function setup(){
        frameRate(30);
        pixelDensity(3.0);
        let cnv = createCanvas(500, 500, WEBGL);
        cnv.parent("carre");
        cnv.mousePressed(userStartAudio);
        mic = new p5.AudioIn();
        mic.start();
      }

      function draw(){
        background('#ed6840');
        lights();
        noStroke();
        fill('#4562a9');

        let micLevel = mic.getLevel();
        rotateX(millis() / 2000);
        rotateY(millis() / 2000 + micLevel);
        box(200);

      }
