const ticTacToe = (xName , oName) =>{
    const X = "X";
    const O = 'O';
    let currentPlayer = X;
    const players = {
        X:xName,
        O:oName,
    }
    //concept of lookup table
    // nextPlayer[currentPlayer]
    const nextPlayer = {
        X:O,
        O:X,
    }

    //Visual representation of Data Structure
    const board = [
        "ongoing",//ongoing , winx,winy,draw
        "","","",
        "","","",
        "","","",
    ];

    const validMove = (move) => {
        return [(1<=move && move<=9) && board[move] === ""];
    };
    const computeStatus = () => {
        let res = "ongoing";
        const winnigCombos = [
            //rows
            [1,2,3],
            [4,5,6],
            [7,8,9],
            //cols
            [1,2,4],
            [2,5,8],
            [3,6,9],
            //diagonals
            [1,5,9],
            [3,5,7],
        ]
        //check for X win
        //Check for O win
        winnigCombos.forEach(([i1,i2,i3])=>{
            if(board[i1] === board[i2] &&
            board[i2] === board[i3] &&
            board[i3] === currentPlayer
            ){
                return `win-${currentPlayer}`;
            }
        });

        //Check for draw
        let areAllCellsTaken = false;
        for(let i =1 ; i<=9 ; i++){
            if(board[i] !== ""){
                areAllCellsTaken = true;
            }
        }
        if(areAllCellsTaken) return "Draw";
        //continue
        return "ongoing";
    };
    return (player , move)=>{
        // Validate the right player : return <error> if not
        if(player !== currentPlayer){
            return [false , `Not your turn.It's ${currentPlayer}'s turn`];
        }
        // Validate right move : return <error> if not
        if(!validMove(move)){
            return [false , `Invalid move, try again`];
        }
        board[move] = currentPlayer;
        board[0] = computeStatus();
        currentPlayer = nextPlayer[currentPlayer];
        // advance the game:
        // 1.update the board
        // 2. Compute the game status
        // 3. next player turn
        return [true, board];
    };
};
module.exports = {ticTacToe};