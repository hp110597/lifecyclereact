import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    console.log('constructor child');
}

static getDerivedStateFromProps(newProps, currentState){
    console.log('getDerivedStateFromProps child');
    return null
}

render() {
console.log('render child');
return (
  <div className='bg-dark p-5 display-4 text-light'>
    Child component
  </div>
)
}
componentDidMount(){
console.log('componentDidMount child');
}
}
