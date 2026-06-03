let obra;
let imgCirculos;
let mouseClickeado = true;

//CONFIG INICIAL SONIDO

//ruido
let haySonido = false;
let umbralRuido = 0.1;

//amplitud
let AMP_MIN = 0.0;
let AMP_MAX = 0.25;
let intensidad = 0;

let calibrandoAmp = true;

//frecuencia

let NOTA_MIN = 48;
let NOTA_MAX = 60;

let pitch;
const model_url = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let frec = 0;
let notaMidi = 0;
let altura = 0;
let difAltura = 0;




//VARIABLES SONIDO
let mic;
let amp = 0;

let pisoAmp = Infinity;
let techoAmp = -Infinity;

let gestorAmp;
let gestorFrec;
let audioIniciado = false;

function preload(){
  for (let i=1; i<=8; i++){
    imgCirculos = loadImage("/data/circ" + i + ".png");
  }

}

function setup() {
  angleMode(RADIANS);
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorFrec = new GestorSenial(NOTA_MIN, NOTA_MAX);

  obra = new Obra();
  obra.iniciar();
}


function draw() {
  background(255);
  if (!audioIniciado) {
    return;
  }
  amp = mic.getLevel();

  if (calibrandoAmp) {
    // Durante calibración guarda extremos reales del entorno para reajustar AMP_MIN/AMP_MAX.
    pisoAmp = min(pisoAmp, amp);
    techoAmp = max(techoAmp, amp);
  } else {
    null;
  }

  gestorAmp.actualizar(amp);

  // Variables derivadas del análisis: intensidad (amplitud) y altura (pitch) suavizadas.
  intensidad = gestorAmp.filtrada;
  altura = gestorFrec.filtrada;
  //difAltura = gestorFrec.derivada * 10;
  
  if (intensidad > umbralRuido){
    haySonido = true;
  } else {
    haySonido = false;
  }

  //OBRA

  obra.dibujar(mouseClickeado, intensidad, altura, haySonido);
}

async function iniciarAudio() {
  if (audioIniciado) {
    return;
  }

  try {
    // p5/WebAudio requiere gesto de usuario antes de habilitar entrada de micrófono.
    await userStartAudio();
    mic.start(
      () => {
      // Se habilita el flujo principal recién cuando el micrófono quedó operativo.
      audioIniciado = true;
    }
    ,
      (error) => {
      console.error("No se pudo iniciar el microfono", error);
    }
    );
  }
  catch (error) {
    console.error("No se pudo habilitar el contexto de audio", error);
  }
}

function mousePressed() {
  iniciarAudio();
}

function keyPressed() {
  if (key === "c" || key === "C") {
    calibrandoAmp = !calibrandoAmp;
    // Exporta rápidamente los extremos capturados para pegarlos en configuración.
    console.log("AMP_MIN =", pisoAmp);
    console.log("AMP_MAX =", techoAmp);
    console.log(`let AMP_MIN = ${pisoAmp}; let AMP_MAX = ${techoAmp};`);
  }

  if (key === "m" || key === "M") {
    monitor = !monitor;
  }
}

/*function mouseClicked() {
 mouseClickeado = !mouseClickeado
 }*/
