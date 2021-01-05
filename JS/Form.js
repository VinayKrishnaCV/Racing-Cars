class Form{
    constructor(){
     this.input = createInput("ᗴᑎ丅ᗴᖇ ᑎᗩᗰᗴ")
     this.button = createButton("🅿🅻🅰🆈")
     this.greeting = createElement("h2")
     this.resetable =  createButton("𝕽𝖊𝖘𝖊𝖙")
    }
    display(){
        var title = createElement("h2")
        title.html("ℜ𝔞𝔠𝔦𝔫𝔤 ℭ𝔞𝔯𝔰")
        title.position(displayWidth/2-50,-24)
        this.input.position(displayWidth/2-200,20)
        this.button.position(displayWidth/2+100,20)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value();
            this.greeting.html("Welcome "+ player.name)
            playerCount+=1
            player.index=playerCount
            player.updateCount(playerCount)
            player.update()
        })
        this.resetable.position(displayWidth/2+300,20)
        this.resetable.size(100,30)
        this.resetable.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
            Player.updateFinishedCars(0)
            window.location.reload()
        })
    }
}