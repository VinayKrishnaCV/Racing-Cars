class Form{
    constructor(){}
    display(){
        var title = createElement("h2")
        title.html("Race Using Cars")
        title.position(500,20)
        var input = createInput("Enter the name or loose")
        var button = createButton("Click Me To Play")
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