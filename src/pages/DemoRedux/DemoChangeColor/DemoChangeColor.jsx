//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DemoChangeColor extends Component {

    changeColor = (color) =>{
        const action = {
            type: 'CHANGE-COLOR',
            imgCar:`./img/products/${color}-car.jpg`

        }
        //Gửi dữ liệu lên redux
        this.props.dispatch(action)
    }

  render() {
    return (
      <div className='container'>
        <h3> Bài tập chọn màu xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={this.props.imgCar} className='w-100'/>
            </div>
            <div className="col-6">
                <button className='btn mx-2' style={{backgroundColor:'red',color:'#fff'}} onClick={()=>{
                    this.changeColor('red')
                }}>Red</button>
                <button className='btn mx-2' style={{backgroundColor:'black',color:'#fff'}} onClick={()=>{
                    this.changeColor('black')

                }}>Black</button>
                <button className='btn mx-2' style={{backgroundColor:'silver',color:'#fff'}} onClick={()=>{
                    this.changeColor('silver')

                }}>Silver</button>
                <button className='btn mx-2' style={{backgroundColor:'#eee',color:'#fff'}} onClick={()=>{
                    this.changeColor('steel')

                }}>Steel</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //state: rootReducer
    imgCar: state.imgCar
})



export default connect(mapStateToProps)(DemoChangeColor)