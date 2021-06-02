import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.less']
})
export class TableroComponent implements OnInit {

	squares: any[]         = [];
	xIsNext: boolean       = true;
	winner:  string | null = null;

	newGame() {
		this.squares = Array(9).fill(null);
		this.winner  = "";
		this.xIsNext = true;
	}

	get player() {
		return(this.xIsNext ? 'X' : 'O');
	}

	makeMove(index: number) {
		if (!this.winner && !this.squares[index]) {
			this.squares.splice(index, 1, this.player);
			this.xIsNext = !this.xIsNext;
		}
		this.calculateWinner()
	}

	calculateWinner() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		
		lines.forEach(line => {
			const [a, b, c] = line;
			if (
				this.squares[a] &&
				this.squares[a] === this.squares[b] &&
				this.squares[a] === this.squares[c] 
			) {this.winner = this.squares[a]}
		})
	}

	ngOnInit(): void {
		this.newGame()
	}
}
