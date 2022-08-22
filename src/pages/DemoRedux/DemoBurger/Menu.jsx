import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    let { burger } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {burger.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button className="btn btn-danger mx-2" onClick={()=>{
                        const action = {
                            type:'CHANGE_QUANTITY',
                            payload: {
                                name:item.name,
                                quantity:1
                            }

                        }
                        this.props.dispatch(action)
                    }}>+</button>
                    {item.quantity}
                    <button className="btn btn-danger mx-2" onClick={()=>{
                        const action = {
                            type:'CHANGE_QUANTITY',
                            payload: {
                                name:item.name,
                                quantity:-1
                            }
                        }
                        this.props.dispatch(action)
                    }}>-</button>
                  </td>
                  <td>{item.quantity * 10}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} align="right">
                Thành tiền :{" "}
                {burger.reduce((tt, item, index) => {
                  return tt + item.quantity * 10;
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.demoBurgerReducer.burger,
});

export default connect(mapStateToProps)(Menu);
