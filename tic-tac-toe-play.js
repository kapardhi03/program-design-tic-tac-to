const {ticTacToe} = require("./tic-tac-toe");

const play = ticTacToe("Messy" , "Ronaldo");


const printBoard = (board) => {
    for(let i = 0 ; i<3 ; i++){
        for(let j = 1; j<=3 ; j++){
            process.stdout.write(`${board[3*i+j] || "."}`)
        }
        process.stdout.write("\n");
    }
};
let result , board;
[result , board] = play("X",1);
printBoard(board);

[result , board] = play("O",5);
printBoard(board);

[result , board] = play("X",3);
printBoard(board);


[result , board] = play("X",2);
if(result){
    printBoard(board);
}
else{
    console.log(board);
}

