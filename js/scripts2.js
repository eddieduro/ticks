//create player symbol
function Player(symbol){
	this.symbol = symbol;
};

//create coordinates for spaces
function Space(x, y){
  this.x = x;
  this.y = y;
  this.player =  "";
};

//player mark a spot
Space.prototype.markedBy = function(player) {
  this.player = player;
  return this.player;
};

//create board
function Board() {
	this.spaces = [ new Space(1,1),
                  new Space(1,2),
                  new Space(1,3),
                  new Space(2,1),
                  new Space(2,2),
                  new Space(2,3),
                  new Space(3,1),
                  new Space(3,2),
                  new Space(3,3)
                ];
};

//find space on the board
Board.prototype.findSpot = function(x,y) {
var result = "";
//for index in board.spaces [array] if x and y are equal to the index return that space index
  this.spaces.forEach(function(space){
    if (space.x === x && space.y === y) {
      result = (space.x + "," + space.y)
    };
  });
  return result;
};

Board.prototype.threeInARow = function(player1, player2){
// var arrPlayer = [];
var winner = "Winner, winner, chicken dinner.";
// var arrPlayerTwo = [];

if (new Board()){
	return new Board();
}

	if ((board.spaces[0].markedBy(player2.symbol) && board.spaces[1].markedBy(player2.symbol) && board.spaces[2].markedBy(player2.symbol))) {
		return winner;
	} else if ((board.spaces[3].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[5].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[6].markedBy(player2.symbol) && board.spaces[7].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[0].markedBy(player2.symbol) && board.spaces[3].markedBy(player2.symbol) && board.spaces[6].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[1].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[7].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[2].markedBy(player2.symbol) && board.spaces[5].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[0].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
		return winner;
	} else if ((board.spaces[6].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[2].markedBy(player2.symbol))){
		console.log(winner);
		return winner;
		}
		console.log("hey");
	};

var board = new Board();
console.log(board);

var player1 = new Player("X");
board.spaces[0].markedBy(player1.symbol);
board.spaces[5].markedBy(player1.symbol);

var player2 = new Player("O");
board.spaces[6].markedBy(player2.symbol);
board.spaces[4].markedBy(player2.symbol);
board.spaces[2].markedBy(player2.symbol);

// console.log(board);
// board.threeInARow(player2.symbol);
board.threeInARow(player1, player2);





// var testPlayer = new Player("X");
// var testPlayer2 = new Player("O");
// var testSpace = new Space(1,2);
//
// describe("Player", function() {
//   it("starts a player with a symbol", function() {
//     expect(testPlayer.symbol).to.equal("X");
//     });
// });
//
// describe('Space', function(){
// 	it("returns the player's x-coordinate", function() {
//     expect(testSpace.x).to.equal(1);
//    });
// });
//
// describe('Space', function(){
// 	it("returns the player's y-coordinate", function() {
//     expect(testSpace.y).to.equal(2);
//    	});
// 	it("lets a player mark symbol on space", function() {
//     testSpace.markedBy(testPlayer);
//     expect(testSpace.markedBy()).to.equal(this.player);
//     });
// });
//
// describe('Board', function() {
//   var testPlayer1 = new Player("X");
//   var testPlayer2 = new Player("O");
//   var testBoard = new Board(board.spaces[0].markedBy(testPlayer2.symbol),board.spaces[1].markedBy(testPlayer2.symbol),board.spaces[2].markedBy(testPlayer2.symbol));
//   // debugger;
//   it("creates a board with 9 spots", function() {
//     });
//   it("will find a spot on the board by coordinates", function() {
//     expect(testBoard.findSpot(1,1)).to.equal("1,1");
//     });
//
//   it("will test if board has winning spots", function(){
//     expect(testBoard.threeInARow(testPlayer1.symbol, testPlayer2.symbol)).to.equal("Winner, winner, chicken dinner.");
//   });
// });
