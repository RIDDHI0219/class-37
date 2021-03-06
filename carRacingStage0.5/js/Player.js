class Player {
  constructor(){
    this.name = null 
    this.distance = 0
    this.index = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerinfo(){//static function is called by the name of the class
   var Playerinfo = database.ref("players");
   Playerinfo.on("value",(data)=>{
     allPlayers = data.val();
   })
  }
}
