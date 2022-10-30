import React from 'react'
import './Move.css'
import img from '../../img/images'

export default class Move extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         value: 100,
         top: 0,
         left: 0
      }
   }

   inputValue(event) {
      this.setState({
         value: +event.target.value
      })
   }

   moving(key) {

      let winHeight = window.innerHeight - 150
      let logoY = this.state.top
      let winWidth = window.innerWidth - 400
      let logoX = this.state.left

      if (key === 'up' && logoY > 0) {
         this.setState({
            top: this.state.top - this.state.value
         })
      }
      if (key === 'down' && logoY < winHeight) {
         this.setState({
            top: this.state.top + this.state.value
         })
      }
      if (key === 'left' && logoX > 0) {
         this.setState({
            left: this.state.left - this.state.value
         })
      }

      if (key === 'right' && logoX < winWidth) {
         this.setState({
            left: this.state.left + this.state.value
         })
      }
   }

   render() {
      return (
         <div className='move' >
            <img className='move_logo' src={img.move.logo} style={{ left: this.state.left, top: this.state.top }} alt="" />


            <div className="btn_block">
               <input type="text" onChange={event => this.inputValue(event)} placeholder={this.state.value} />

               <button onClick={() => this.moving('up')}></button>
               <button onClick={() => this.moving('down')}></button>
               <button onClick={() => this.moving('left')}></button>
               <button onClick={() => this.moving('right')}></button>
            </div>
         </div>
      )
   }
}