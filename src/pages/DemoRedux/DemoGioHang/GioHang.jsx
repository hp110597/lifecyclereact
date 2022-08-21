import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return <tr key={index}>
                  <td>1</td>
                  <td>
                    <img
                      src={spGH.hinhAnh}
                      alt="..."
                      width={50}
                    />
                  </td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <button className="btn btn-primary mx-2">+</button>{spGH.soLuong}
                    <button className="btn btn-primary mx-2">-</button>
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.giaBan*spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger mx-2">Xóa</button>
                  </td>
                </tr>
              ;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.demoGioHangReducer.gioHang,
});

export default connect(mapStateToProps)(GioHang);
