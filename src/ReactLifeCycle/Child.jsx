import React, { Component,PureComponent } from 'react'

/*
  PureComponent: là component ko có lifecycle, shouldComponentUpdate
  nó sẽ tự xử lí render lại khi props thay đổi (đối với props là primitive value:
    number,string,boolean,undefined,null). Đối với reference value thì cần tạo biến 
    địa chỉ mới và clone dữ liệu ra = spread operator {...} / [...]
 */

export default class Child extends PureComponent {
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

// shouldComponentUpdate(newProps, newState){
//   //State number thay đổi (this.props.number) thì return true, ngược lại thì return false
//   if (this.props.number !== newProps.number){
//     return true
//   }

//   console.log('shouldComponentUpdate child');
//   return false
// }

render() {
  let {number,product}= this.props
console.log('render child');
return (
  <div className='bg-dark p-5 display-4 text-light'>
    <h3>Number Child: {number} </h3>
    Child component
    <h3>Product: {product.name} - like: {product.like}</h3>
  </div>
)
}
componentDidMount(){
console.log('componentDidMount child');
}

componentDidUpdate(prevProps,prevState){
  //Chạy mỗi lần state hoặc props thay đổi
  //Hạn chế setState trong này, nếu có lệnh setState phải có if

  console.log('componentDidUpdate');
}

}
