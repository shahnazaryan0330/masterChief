import React from 'react'
import './Game.css'
import gif from '../../gif/gif'

export default class Game extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         coin: {
            x: Math.abs(Math.random() * window.innerWidth - 100),
            y: Math.abs(Math.random() * window.innerHeight - 100)
         },
         pacman: {
            x: 200,
            y: 100
         },
         score: '000',
         showWin: {
            display: 'none',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 10,
            width: '100%',
            height: '100vh'
         }
      }
   }

   randomCoin() {
      this.setState({
         coin: {
            x: Math.abs(Math.random() * window.innerWidth - 100),
            y: Math.abs(Math.random() * window.innerHeight - 100)
         }
      })
   }

   addScore() {
      this.setState({
         score: +this.state.score + 100
      })
   }

   checkWin() {
      let coinX = this.state.coin.x
      let coinY = this.state.coin.y
      let pacmanX = this.state.pacman.x
      let pacmanY = this.state.pacman.y

      if (Math.abs(coinX - pacmanX) < 50 && Math.abs(coinY - pacmanY) < 50) {
         this.addScore()

         if (+this.state.score === 900) {
            this.setState({
               ...this.state,
               score: '000',
               showWin: {
                  display: 'block',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 10,
                  width: '100%',
                  height: '100vh'
               }
            })
         }

         this.randomCoin()

      }
   }

   mouseCoord(event) {
      this.setState({
         pacman: {
            x: event.clientX - 50,
            y: event.clientY - 50
         }
      })

      this.checkWin()
   }

   render() {
      return (
         <div className="Game" onMouseMove={event => this.mouseCoord(event)}>

            <span className='score'>{this.state.score}</span>

            <img className='coin' style={{ left: this.state.coin.x, top: this.state.coin.y }} src={gif.game.coin} alt="" />

            <img className='pacman' style={{ left: this.state.pacman.x, top: this.state.pacman.y }} src={gif.game.pacman} alt="" />

            <img src={gif.game.win} style={this.state.showWin} alt="" />

         </div>
      )
   }
}