class Form{
    constructor(){}
    display(){
        var title = createElement("h2")
        title.html("ℜ𝔞𝔠𝔦𝔫𝔤 ℭ𝔞𝔯𝔰")
        title.position(500,20)
        var input = createInput("ᗴᑎ丅ᗴᖇ ᑎᗩᗰᗴ")
        var button = createButton("🅿🅻🅰🆈")
        var greeting = createElement("h2")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var greeter = input.value();
            greeting.html("Welcome "+ greeter)
            playerCount+=1
            player.updateCount(playerCount)
            player.update(greeter)
        })
    }
}