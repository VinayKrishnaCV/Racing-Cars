class Form{
    constructor(){
     this.input = createInput("ᗴᑎ丅ᗴᖇ ᑎᗩᗰᗴ")
     this.button = createButton("🅿🅻🅰🆈")
     this.greeting = createElement("h2")
    }
    display(){
        var title = createElement("h2")
        title.html("ℜ𝔞𝔠𝔦𝔫𝔤 ℭ𝔞𝔯𝔰")
        title.position(500,20)
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
    }
}