import React from 'react'

class About extends React.Component {
 render() {
  return (
   <div>
    <h1>About</h1>
    <h2>I am {this.props.name}</h2>
   </div>
  )
 }
}


export default About;