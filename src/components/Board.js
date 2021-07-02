import React from "react";
import Square from './Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: new Array(9).fill(''),
      player: 'X',
      winner: '',
      winnerArr: []
    }
  }

  changePlayer (index) { // 落棋子
    if (this.state.winner) {
      return
    }
    let player = this.state.player === 'X' ? 'O' : 'X'
    let squares = this.state.squares.slice()
    squares[index] = player
    this.setState({
      player,
      squares,
    })
    let res = this.calculateWinner(squares)
    if (res) {
      this.setState({
        winner: res.winner,
        winnerArr: res.winnerArr
      })
    }
  }

  highLightClassName (index) { // 高亮获胜的棋子
    if (this.state.winnerArr.indexOf(index) > -1) {
      return 'winner-square'
    } else {
      return ''
    }
  }

  calculateWinner (squares) { // 判断胜负
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          winnerArr: lines[i]
        }
      }
    }
    return null
  }

  render () {
    const { squares, winner, player } = this.state
    let title = ""
    if (!winner) {
      title = <p>Next player: {player}</p>
    } else {
      title = <p> Winner is: {winner}</p>
    }
    return (
      <div className="board">
        <h1>井字棋游戏--React</h1>
        {title}
        { squares.map((el, index) => {
          return <Square key={index}  player={el} dynaClassName={this.highLightClassName(index)} changePlayer={this.changePlayer.bind(this, index)} />
        })}
      </div>
    )
  }
}

export default Board