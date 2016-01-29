var testPlayer = new Player("X");
var testPlayer2 = new Player("O");
var testSpace = new Space(1,2);

describe("Player", function() {
  it("starts a player with a symbol", function() {
    expect(testPlayer.symbol).to.equal("X");
    });
});

describe('Space', function(){
	it("returns the player's x-coordinate", function() {
    expect(testSpace.x).to.equal(1);
   });
});

describe('Space', function(){
	it("returns the player's y-coordinate", function() {
    expect(testSpace.y).to.equal(2);
   	});
	it("lets a player mark symbol on space", function() {
    testSpace.markedBy(testPlayer);
    expect(testSpace.markedBy()).to.equal(this.player);
    });
});

describe('Board', function() {
  var testPlayer1 = new Player("X");
  var testPlayer2 = new Player("O");
  var testBoard = new Board();
  var space1 = testBoard.spaces[0].markedBy(testPlayer1.symbol);
  testBoard.spaces[1].markedBy(testPlayer1.symbol);
  testBoard.spaces[2].markedBy(testPlayer1.symbol);
  testBoard.checkRow();
  // debugger;
  it("creates a board with 9 spots", function() {
    });
  it("will find a spot on the board by coordinates", function() {
    expect(testBoard.findSpot(1,1)).to.equal("1,1");
    });
  it("will test if board has winning row", function(){
    expect(testBoard.checkRow()).to.equal("Winner, winner, chicken dinner.");
  });

});
describe('Board', function(){
  var testPlayer1 = new Player("X");
  var testPlayer2 = new Player("O");
  var testBoard = new Board();
  var space1 = testBoard.spaces[0].markedBy(testPlayer1.symbol);
  testBoard.checkColumn();
  var space2 = testBoard.spaces[3].markedBy(testPlayer1.symbol);
  testBoard.checkColumn();
  var space3 =   testBoard.spaces[6].markedBy(testPlayer1.symbol);
    testBoard.checkColumn();
  console.log(testBoard);
  // var testBoard = new Boa  rd(
  //   board.spaces[1].markedBy(testPlayer1.symbol),
  //   board.spaces[4].markedBy(testPlayer1.symbol),
  //   board.spaces[7].markedBy(testPlayer1.symbol)
  // );
  // it("will test if board has winning column", function(){
  //   expect(testBoard.checkColumn()).to.equal("Winner, winner, turkey dinner.");
  // });

  it("will check to see if player has winning combo", function(){
    expect(testBoard.evalCombo()).to.equal("You are a winner!")
  });
});
testBoard.board();
