class Game {
    constructor(){
    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
    }

    play(){
        form.greeting.hide()
        Player.getPlayerInfo();
        console.log(allPlayers)
        var q = 300
        for(var plr in allPlayers){
            text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, q)
            q+=20
        }
        if(keyIsDown(UP_ARROW)){
            player.distance+=10
            player.update()
        }
    }
}