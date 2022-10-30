import React from 'react';
import './TrafficLight.css'

import img from '../../img/images'
import gif from '../../gif/gif'

export default class TrafficLight extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         lightCounter: 0,
         person: {
            position: gif.traffic.sonik[0],
            animation: null
         }
      }
   }

   setLight() {
      this.setState({
         ...this.state,
         lightCounter: this.state.lightCounter + 1
      })

      if (this.state.lightCounter === 2) {
         this.setState({
            ...this.state,
            lightCounter: 0
         })
      }

      this.setPerson(this.state.lightCounter)

   }

   setPerson(n) {
      if (n === 1) {
         this.setState({
            person: {
               position: gif.traffic.sonik[1],
               animation: { animation: 'sonikRun 1s ease', left: '2000px' }
            }
         })
      }
      else {
         this.setState({
            person: {
               position: gif.traffic.sonik[0],
               animation: null
            }
         })
      }
   }

   render() {
      return (
         <div className='TrafficLight'>
            <div className='lights'>
               <img src={img.traffic.lights[this.state.lightCounter]} alt="" />
               <button onClick={() => this.setLight()}></button>
            </div>

            <div className="platform">
               <img src={this.state.person.position} style={this.state.person.animation} alt="" />
               <img src={img.traffic.platform} alt="" />
            </div>
         </div>
      )
   }
}