class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    Player.getPlayerinfo();
    textSize(20);
    text("game start",120,100);
    if(allPlayers!=undefined){
      var yPosition = 130;
      for(var plr in allPlayers){
if(plr==="player"+player.index){
  fill("red");
  
}
else {fill("black")}
textSize(15)
yPosition+=20;
text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,yPosition);
      }
    }
    if(keyDown(UP_ARROW) && player.index!==null){
      player.distance+=50;
      player.update()
    }
  }
}
