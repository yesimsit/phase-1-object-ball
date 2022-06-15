function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
};
console.log(gameObject());


//Defining functions with frequently used objects for ease of access and coding

function homeTeam() {
    return gameObject().home;
}

function awayTeam() {
    return gameObject().away;
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players);
}



/*Build a function, `numPointsScored` that takes in an argument of a player's
  name and returns the number of points scored for that player.
  - Think about where in the object you will find a player's `points`. How can
    you iterate down into that level? Think about the return value of your
    function.*/
 
/*function numPointsScored(playerInput){
    for (const playerName in players()){
        if(playerName === playerInput){
            return players()[playerName].points
        }
    }

}*/
function numPointsScored(playerName) {
    return players()[playerName].points;
}


console.log("number of the scores:", numPointsScored('Ben Gordon'))
//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player

function shoeSize(playerName){
    return players()[playerName].shoe;

}
console.log("shoe size:",shoeSize('Ben Gordon'))
//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(nameOfTeam){
   if(homeTeam().teamName === nameOfTeam){
    return homeTeam().colors
   }else{
    return awayTeam().colors
   }

}
console.log(teamColors("Brooklyn Nets"));

//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
    return [homeTeam().teamName, awayTeam().teamName]
}
console.log(teamNames())

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.


function playerNumbers(nameOfTeam) {
    const teamSelected = homeTeam().teamName === nameOfTeam ? homeTeam() : awayTeam();
    const teamPlayers = Object.entries(teamSelected.players);
    return teamPlayers.map(array => array[1].number);
}


  console.log(playerNumbers("Charlotte Hornets"));

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.

  function playerStats(playerName) {
    return players[playerName];

  }
  console.log(playerStats('Ben Gordon'));
//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
function bigShoeRebounds() {
    const playerInfo = Object.values(players());
    
    const biggestShoe = playerInfo.reduce((player1, player2) => {
        if (player1.shoe > player2.shoe) {
            return player1;
        } else {
            return player2;
        }
    });
    return biggestShoe.rebounds;
}

