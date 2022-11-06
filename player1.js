
// Variáveis Player 1
var xP1 = 100;
var yP1 = 368;
var widthP1 = 28;
var heightP1 = 28;
var speedP1= 5;

var hit = false;

    //Mostra jogador 1
    function showP1 () 
    {    
        image(imgAtor1, xP1, yP1, widthP1, heightP1);
    }

    //Colisão com os carros
    function colideCarros () { 
        for (let posicao = 0; posicao < xCars.length; posicao++) 
        { 
            hit = collideRectCircle(xCars[posicao], yCars[posicao], widthCars[posicao], heightCars[posicao], xP1, yP1, (widthP1 - 10));
        
                if (hit == true) 
                {
                    somColisao.play();
                    resetP1Position();
                    tirandoPontosP1();
                }
        }
    }

    //Placar P1
    var pontosP1 = 0;
    function placar () 
    { 
        textAlign(CENTER);
        textSize(25);
        fill ( color ( 0, 255, 255 ) ) 
        text(pontosP1, 107, 27);    
    }

    function pontosPlacar ()
    {   
        if ( yP1 < 20) 
        {         
            pontosP1 += 1;
            resetP1Position();
            somPontos.play();
        }  
    }  

    function tirandoPontosP1 () 
    { 
        if (pontosP1 > 0) 
        {
            pontosP1 -= 1;
        }
 
    }  

    //Volta o jogador 1 para a posição inicial            
    function resetP1Position () 
    { 
        yP1 = 368;
        xP1 = 100;
    }
    
    
  
    //Movimenta jogador 1
    function movimentaP1() 
    {
        if (keyIsDown(UP_ARROW) && yP1 > 0 )
        {
            yP1 += - speedP1;
        }
   
        if (keyIsDown(DOWN_ARROW)  && yP1 + heightP1 < height ) 
        {
            yP1 += speedP1;
        } 
   
     
        if (keyIsDown(RIGHT_ARROW) && xP1 + widthP1 < width) 
        {
            xP1 += speedP1;
        } 
     
        if (keyIsDown(LEFT_ARROW) && xP1 > 0) 
        {
            xP1 += - speedP1;
        } 
    }
     
    
     
     
     
    
   
