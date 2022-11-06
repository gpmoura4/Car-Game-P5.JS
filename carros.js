// Variáveis Carros 
              
                //0    1    2    3    4    5 
var widthCars = [30, 30, 30, 30, 30, 30];
var heightCars = [30, 30, 30, 30, 30, 30];
var speedCars = [-6, -7, -7, -5, -5, -7];
var xCars = [500, 300, 170, 400, 500, 300];
var yCars = [326, 267, 215, 154, 100, 50];  
            
            
 // Mostrar os carros
    function showCars () 
    {
        for (var posicao = 0; posicao < imgCars.length; posicao++) 
        {
            image(imgCars[posicao] , xCars[posicao] , yCars[posicao], widthCars[posicao], heightCars[posicao]);   
        }    
    }

  
    function movimentaCars () 
    {
        for ( let posicao = 0; posicao < xCars.length; posicao++ ) 
        {
            xCars[posicao] += speedCars[posicao];
        }
    }

    function resetCarPosition () 
    { 

        for ( let posicao = 0; posicao < xCars.length; posicao++) 
        {
            if (xCars[posicao] + widthCars[posicao] < 0) 
            { 
                xCars[posicao] = width;
            }   
        }
    }


    function rebateCars () 
    {
        for ( var posicao = 0; posicao < xCars.length; posicao++ ) 
        {
            if ( yP1 > 0 && yP1 + heightP1 < height + 10 ) 
            {      
                    if ( xP1 + widthP1 >  xCars[posicao] && xP1 < xCars[posicao] + widthCars[posicao] && yP1 < yCars[posicao] + heightCars[posicao] && yP1 + heightP1 > yCars[posicao])   
                    { 
                        yP1 = 368;
                        xP1 = 100;
                    }      
            }         
        }
    }
            
    


