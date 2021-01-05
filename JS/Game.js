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
            car1.addImage(c1)
            car2.addImage(c2)
            car3.addImage(c3)
            car4.addImage(c4)
            cars=[car1,car2,car3,car4]
        }
    }

    play(){
        form.greeting.hide()
        Player.getPlayerInfo();
        player.getFinishedCars()
        var x=350;
        var y;
        var index = 0;
        image(TRACK,0,-height*4,width,height*5)
        for(var plr in allPlayers){
            fill("black")
            y = displayHeight-180-allPlayers[plr].distance;
            textAlign(CENTER)
            text(allPlayers[plr].name, x, y-60)
            cars[index].x = x;
            cars[index].y = y;
            if(index===player.index-1){
                push()
                    fill("red")
                    ellipse(cars[index].x,cars[index].y,60,100)
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index].y-height/2+50
                pop()
            }
            x+=200
            index+=1
        }
        drawSprites()
        if(keyIsDown(UP_ARROW)){
            player.distance+=10
            player.update()
        }
        if(player.distance>2960){
            gameState=2
            player.rank+=1
            Player.updateFinishedCars(player.rank)
            player.update()
        }
    }

    end(){
        camera.y=height/2
        Player.getPlayerInfo();
        var y=0
        for(var plr in allPlayers){
            text(allPlayers[plr].name+" You are "+allPlayers[plr].rank,width/2,height/2+y)
            y+=20
        }
    }
}