
function setup() 
{
    //width //height
    createCanvas(650, 400);
    // trilhaSonora.loop();
}

function draw() 
{
    background(imgEstrada);
    showP1();
    movimentaP1();
    showCars();
    movimentaCars ();  
    resetCarPosition (); 
    colideCarros ();
    placar();
    pontosPlacar();
}


