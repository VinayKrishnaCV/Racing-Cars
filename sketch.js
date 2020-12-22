var gameState=0,playerCount,database,game,form,player,allPlayers;
var cars,car1,car2,car3,car4

function setup(){

    createCanvas(displayWidth-30,displayHeight-150);

    database = firebase.database()
    game=new Game();
    game.getState()
    game.start()
}

function draw(){

    background("white");

    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        game.play()
    }

}
