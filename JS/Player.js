class Player {
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
        this.rank=null;
    }
    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+ this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }


    static updateFinishedCars(rank){
        database.ref("/").update({
            finishedCars:rank
        })
    }

    getFinishedCars(){
        var finishedCarsRef=database.ref("finishedCars")
        finishedCarsRef.on("value",(data)=>{
            this.rank=data.val()
        })
    }
}