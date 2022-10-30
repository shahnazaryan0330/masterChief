import React from 'react'
import './Block.css'

export default class Block extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         bool: true,
         text: 'Lorem ipsum dolor sit...'
      }
   }

   showMore() {
      let txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat ratione omnis porro vero deleniti nam nisi tenetur distinctio molestiae facere rerum autem facilis inventore nulla ex enim nihil magni?'

      this.setState({
         bool: !this.state.bool,
         text: this.state.bool ? txt : 'Lorem ipsum dolor sit...',
      })
   }

   render() {
      return (
         <div className="block">
            {this.state.text}
            <button onClick={() => this.showMore()}>Show More</button>
         </div>
      )
   }
}