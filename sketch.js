var gameState=0,playerCount,database,game,form,player,allPlayers;

function setup(){

    createCanvas(500,500);

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
    }

}
