class TicTacToe {
    constructor() {
        this.symbol = ['x', 'o'];
        this.activePlayer = 0;
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.symbol[this.activePlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.symbol[this.activePlayer];
            this.activePlayer = this.activePlayer ? 0 : 1;
        }
    }

    isFinished() {
        return this.noMoreTurns() || !!this.getWinner();
    }

    getWinner() {
        if (this.field[0][0] && (this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2])) {
            return this.field[0][0];
        };
        if (this.field[1][0] && (this.field[1][0] === this.field[1][1]) && (this.field[1][0] === this.field[1][2])) {
            return this.field[1][0];
        };
        if (this.field[2][0] && (this.field[2][0] === this.field[2][1]) && (this.field[2][0] === this.field[2][2])) {
            return this.field[2][0];
        };
        if (this.field[0][0] && (this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0])) {
            return this.field[0][0];
        };
        if (this.field[0][1] && (this.field[0][1] === this.field[1][1]) && (this.field[0][1] === this.field[2][1])) {
            return this.field[0][1];
        };
        if (this.field[0][2] && (this.field[0][2] === this.field[1][2]) && (this.field[0][2] === this.field[2][2])) {
            return this.field[0][2];
        };
        if (this.field[0][0] && (this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) {
            return this.field[0][0];
        };
        if (this.field[0][2] && (this.field[0][2] === this.field[1][1]) && (this.field[0][2] === this.field[2][0])) {
            return this.field[0][2];
        };
        return null;
    }

    noMoreTurns() {
        return !(this.field.reduce((status, item) => {
            return status || item.includes(null);
        }, false));
    }


    isDraw() {
        return this.noMoreTurns() && (!this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
