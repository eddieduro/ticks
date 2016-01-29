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

var space1 = new Space(1, 1);
var space2 = new Space(1, 2);
var space3 = new Space(1, 3);
var space4 = new Space(2, 1);
var space5 = new Space(2, 2);
var space6 = new Space(2, 3);
var space7 = new Space(3, 1);
var space8 = new Space(3, 2);
var space9 = new Space(3, 3);

//create board
function Board() {
	this.spaces = [ space1,
                  space2,
                  space3,
                  space4,
                  space5,
                  space6,
                  space7,
                  space8,
                  space9
                ];
								this.player1 = "X";
								this.player2 = "O";
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

var columnArr = [];
Board.prototype.checkColumn = function(x) {
	// for(var i = 0; i < 3;  i++){
	// 	columnArr.push(i + 1);
		for(i=0; i <=9; i++){
			var xcord = 1;
			if(this.spaces[i].x === xcord && i < 1){
				columnArr.push(xcord);
				console.log(columnArr);
				// return columnArr;
			};
			if(i > 2 && i < 4){
				var xcord = 2;
				columnArr.push(xcord);
					console.log(columnArr);
			};
			if(i > 4 && i < 6){
				var xcord = 3;
				columnArr.push(xcord);
					console.log(columnArr);
			}
			// console.log(columnArr);
		};


			// if((this.spaces[3].x === 1 && columnArr[0] === 2) &&
			// 	(this.spaces[4].x === 2 && columnArr[0] === 2) &&
			// 	(this.spaces[5].x === 3 && columnArr[0] === 2)){
			// 		console.log("Winner, winner, turkey dinner.");
	 	// 		 return "Winner, winner, turkey dinner.";
			// }
			// if((this.spaces[6].x === 1 && columnArr[0] === 3) &&
			//  (this.spaces[7].x === 2 && columnArr[0] === 3) &&
			//  (this.spaces[8].x === 3 && columnArr[0] === 3)){
			// 	 console.log("Winner, winner, turkey dinner.");
			// 	 return "Winner, winner, turkey dinner.";
			// }



var rowArr = [];
Board.prototype.checkRow = function(y) {

	for(i=0; i <=9; i++){
		var ycord = 1;
		if(this.spaces[i].y === ycord && i < 1){
			rowArr.push(ycord);
			console.log(rowArr);
			// return columnArr;
		};
		if(i > 2 && i < 4){
			var ycord = 2;
			rowArr.push(ycord);
				console.log(rowArr);
		};
		if(i > 4 && i < 6){
			var ycord = 3;
			rowArr.push(ycord);
				console.log(rowArr);
		}
		// console.log(columnArr);
	};
}
			// for (var i = 0; i < 3 ; i ++) {
			//  	rowArr.push(i + 1);
			//
			// 	if((this.spaces[0].y === 1 && rowArr[0] === 1) && 			   				(this.spaces[1].y === 2 && rowArr[0] === 1) &&
			// 		(this.spaces[2].y === 3 && rowArr[0] === 1)) {
			// 			console.log("Winner, winner, chicken dinner.");
			// 			return "Winner, winner, chicken dinner.";
			// 	} else if ((this.spaces[3].y === 1 && rowArr[1] === 2) && 			   				(this.spaces[4].y === 2 && rowArr[1] === 2) &&
			// 		(this.spaces[5].y === 3 && rowArr[1] === 2)) {
			//
			// 			return "Winner, winner, chicken dinner.";
			// 	} else if ((this.spaces[6].y === 1 && rowArr[2] === 3) && 			   				(this.spaces[7].y === 2 && rowArr[2] === 3) &&
			// 		(this.spaces[8].y === 3 && rowArr[2] === 3)) {
			//
			// 			return "Winner, winner, chicken dinner.";
			// 	}
			// 	console.log(rowArr);
			// }
		}
//


// var columnArrY = [];

 // if (this.spaces[1].x === 1) {
 // columnArr.push(1);
 // }
 // if (this.spaces[2].x === 1) {
 // columnArr.push(1);
//  }
//  console.log(columnArr);
// }










// // // var arrPlayer = [];
// this.player1 = player1;
//
// this.player2 = player2;
//
// var winner = "Winner, winner, chicken dinner.";
// // // var arrPlayerTwo = [];
// // // if (new Board()){
// // // 	console.log("hey");
// // // }
// //


// Board.prototype.checkCombo = function(space) {
// 	if (board.spaces[0] === space.markedBy()) {
// 		console.log("winner");
// 		return winner;
// 	} else if ((board.spaces[3].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[5].markedBy(player2.symbol))){
// 		return winner;
// 	} else if ((board.spaces[6].markedBy(player2.symbol) && board.spaces[7].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
// 		return winner;
// 	} else if ((board.spaces[0].markedBy(player2.symbol) && board.spaces[3].markedBy(player2.symbol) && board.spaces[6].markedBy(player2.symbol))){
// 		return winner;
// 	} else if ((board.spaces[1].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[7].markedBy(player2.symbol))){
// 		console.log("winner");
// 		return winner;
// 	} else if ((board.spaces[2].markedBy(player2.symbol) && board.spaces[5].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
// 		return winner;
// 	} else if ((board.spaces[0].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[8].markedBy(player2.symbol))){
// 		return winner;
// 	} else if ((board.spaces[6].markedBy(player2.symbol) && board.spaces[4].markedBy(player2.symbol) && board.spaces[2].markedBy(player2.symbol))){
// 		console.log(winner);
// 		return winner;
// 	} else {
// 		console.log("loser");
// 	}
// 	};
// };
//
//
// var board = new Board();

// board.checkColumn();
// var player1 = new Player("X");
// board.checkRow(board.spaces[1].markedBy(player1.symbol));
// board.checkRow(board.spaces[4].markedBy(player1.symbol));
// board.checkRow(board.spaces[7].markedBy(player1.symbol));
//
// var player2 = new Player("O");
// board.checkRow(board.spaces[0].markedBy(player2.symbol));
// board.checkRow(board.spaces[1].markedBy(player2.symbol));
// board.checkRow(board.spaces[2].markedBy(player2.symbol));

// console.log(board);
// board.threeInARow(player2.symbol);
// board.threeInARow(player1.symbol, player2.symbol);

// console.log(board);
