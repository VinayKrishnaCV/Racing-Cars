var gameState=0,playerCount,database,game,form,player,allPlayers;
var cars,car1,car2,car3,car4,c1,c2,c3,c4,TRACK


function preload(){
    c1=loadImage("Images/car1.png")
    c2=loadImage("Images/car2.png")
    c3=loadImage("Images/car3.png")
    c4=loadImage("Images/car4.png")
    TRACK=loadImage("Images/track.jpg")
}


function setup(){

    createCanvas(displayWidth-30,displayHeight-150);

    database = firebase.database()
    game=new Game();
    game.getState()
    game.start()
}

function draw(){

    background("white");

    if(playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        game.play()
    }if(gameState===2){
        game.end()
    }

}
