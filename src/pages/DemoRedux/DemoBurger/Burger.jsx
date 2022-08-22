import React, { Component } from 'react'
import { connect } from 'react-redux'


class Burger extends Component {

    renderTopping=(name)=>{
        let {burger} =this.props
        let itemTopping = burger.find(item=>item.name === name)
        if (itemTopping){
            let arrJSX = []
            for(let index=1; index <= itemTopping.quantity;index++){
                let divTopping = <div className={name} key={index}></div>
                arrJSX.push(divTopping) 

            }
            return arrJSX
        }
        return []
    }


  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderTopping('salad')}
        {this.renderTopping('cheese')}
        {this.renderTopping('beef')}
        <div className="breadBottom"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger:state.demoBurgerReducer.burger
})



export default connect(mapStateToProps)(Burger)