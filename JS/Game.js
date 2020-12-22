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
            car1=createSprite(100,100,10,20)
            car2=createSprite(300,100,10,20)
            car3=createSprite(500,100,10,20)
            car4=createSprite(700,100,10,20)
            cars=[car1,car2,car3,car4]
        }
    }

    play(){
        form.greeting.hide()
        Player.getPlayerInfo();
        console.log(allPlayers)
        var x=100;
        var y;
        var index = 0;
        for(var plr in allPlayers){
            //text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, q)
            cars[index].x = x;
            cars[index].y = displayHeight-180-allPlayers[plr].distance;
            if(index===player.index-1){
                cars[index].shapeColor="red"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index].y
            }
            x+=200
            index+=1
        }
        drawSprites()
        if(keyIsDown(UP_ARROW)){
            player.distance+=10
            player.update()
        }
        
    }
}