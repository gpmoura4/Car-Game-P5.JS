// images e sons do jogo
var imgAtor1;
var imgCarro1;
var imgCarro2;
var imgCarro3;
var imgCarro4;
var imgCarro5;
var imgCarro6;
var imgEstrada;


var trilhaSonora;
var somPontos;
var somColisao;


function preload() {
  
  imgAtor1 = loadImage('images/cow.jpg');
  
 
  imgCarro1 = loadImage('images/car.jpg');
  imgCarro2 = loadImage('images/car.jpg');
  imgCarro3 = loadImage('images/car.jpg');
  imgCars = [imgCarro1, imgCarro2, imgCarro3, 
             imgCarro1, imgCarro2, imgCarro3];
  
  imgEstrada = loadImage('images/estrada.jpg');
  
  trilhaSonora = loadSound('Sons/trilha.mp3');
  somPontos = loadSound('Sons/pontos.wav');
  somColisao = loadSound('Sons/colidiu.mp3');
}




