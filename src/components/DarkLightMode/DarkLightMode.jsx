import './DarkLightMode.css'
import React from 'react'

import img from '../../img/images'

export default class DarkLightMode extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         bool: true,
         moonSun: img.darkLight.dark[0],
         bg: img.darkLight.dark[1]
      }
   }

   setMode() {

      if (this.state.bool) {
         this.setState({
            moonSun: img.darkLight.light[0],
            bg: img.darkLight.light[1]
         })
      }
      else {
         this.setState({
            moonSun: img.darkLight.dark[0],
            bg: img.darkLight.dark[1]
         })
      }

      this.setState({
         bool: !this.state.bool
      })
   }

   render() {
      return (
         <div className='darkLightMode'>
            <button onClick={() => this.setMode()}>
               <img src={this.state.moonSun} alt="" />
            </button>
            <img className='bg' src={this.state.bg} alt="" />
         </div>
      )
   }
}