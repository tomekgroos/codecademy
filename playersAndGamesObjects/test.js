const team = {
  _players: [
    {
      firstName: 'Robert',
      lastName: 'Lewandowski',
      age: 31
    },
    {
       firstName: 'Gianluigi',
       lastName: 'Buffon',
       age: 42
    },
      {
       firstName: 'Kylian',
       lastName: 'Mbappe',
       age: 21
    }
  ],
  _games: [
    {
      opponent: 'Poland',
      teamPoints: 31,
      opponentPoints: 31
    },
     {
      opponent: 'Italy',
      teamPoints: 40,
      opponentPoints: 31
    },
     {
      opponent: 'France',
      teamPoints: 50,
      opponentPoints: 40
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  addGame(oppName, teamPts, oppPts){
    const game = {
      opponent: oppName,
      teamPoints: teamPts,
      opponentPoints: oppPts
    }
    this._games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Hungary', 45, 21);
team.addGame('Russia', 1, 87);
team.addGame('USA', 55, 65);

console.log(team._players);
console.log(team._games);