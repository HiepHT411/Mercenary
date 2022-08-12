import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss"
import * as orderService from "../../services/orderService"

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [order,setOrder] = useState({
      products:[],
      name:'',
      phone:'',
      from: "",
      to:"",
      distance: 0,
      total : cart?.total
  })
  useEffect(()=>{
      let pros = []
      cart.products.map((item)=>{
          pros.push(item._id)
      })
      setOrder({...order,products:pros}) 
  },[cart])
  const handleInput = (e)=>{
    setOrder({...order,[e.target.name]: e.target.value})
  }
  const handleCheck = ()=>{
      if(order.name&&order.phone&&order.from&&order.to&&order.distance){
        return true
      }else{
        return false
      }
  }
  const handleButtonConfirmPayment = async() => {
    if(handleCheck()){
      const data = order;
      data.total = order.distance*10 + cart.total
      const res = await orderService.store(data)
      if(res.data){
        setOrder({})
      }
    }else{
      alert("Bạn chưa điền đầy đủ thông tin")
    }
  };


  return (
    <div className="wrapper-list">
      <div className="container-list">
        <div className="title">
          <h2 style={{ color: "#06a006" }}>Thanh toán</h2>
          <h3 style={{ color: "#f7a767" }}>Đơn hàng gồm: </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Trọng lượng(kg)</th>
              <th>Số lượng</th>
              <th>Tiền</th>
            </tr>
          </thead>
          <tbody>
            {cart.products?.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item?.slug}</td>
                <td>{item?.name}</td>
                <td>{item?.weight}</td>
                <td>{item?.quantity}</td>
                <th>{item?.weight * item?.price}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {
          cart?.products.length > 0 &&(
            <div>
              <div className="card-body">
                <form>
                  <div className="form-group w-50">
                    <div className="col-xs-4">
                      <label>Họ và tên: </label>
                      <input
                        value={order?.name}
                        onChange = {handleInput}
                        className="form-control"
                        placeholder="Họ và tên"
                        name="name"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group w-50">
                    <label>Số điện thoại: </label>
                    <input
                      value={order?.phone}
                      onChange = {handleInput}
                      className="form-control"
                      placeholder="Số điện thoại"
                      name="phone"
                    />
                  </div>
                  <div className="form-group w-75">
                    <label>Địa chỉ gửi: </label>
                    <input onChange ={handleInput}
                      className="form-control"
                      placeholder="Địa chỉ gửi"
                      name="from"
                      value={order?.from}
                    />
                  </div>
                  <div className="form-group w-75">
                    <label>Địa chỉ nhận: </label>
                    <input
                      onChange = {handleInput}
                      className="form-control"
                      placeholder="Địa chỉ nhận"
                      name="to"
                      value={order?.to}
                    />
                  </div>
                  <div className="form-group w-75">
                    <label>Khoảng cách </label>
                    <input
                      onChange = {handleInput}
                      className="form-control"
                      placeholder="Khoảng cách"
                      type="number"
                      min={0}
                      name="distance"
                      value={order?.distance}
                    />
                  </div>
                </form>
              </div>
    
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-lg">
                    $ Tổng giá trị sản phẩm
                  </span>
                </div>
                <input
                  value={cart?.total}
                  type="text"
                  className="form-control-md"
                  aria-label="Amount (to the nearest dollar)"
                  readOnly
                />
                <div className="input-group-append">
                  <span className="input-group-text">$</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-lg">
                    $ Tiền vận chuyển
                  </span>
                </div>
                <input
                  value = {order?.distance*10}
                  type="text"
                  className="form-control-md"
                  aria-label="Amount (to the nearest dollar)"
                  readOnly
                />
                <div className="input-group-append">
                  <span className="input-group-text">$</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$ Tổng giá trị đơn hàng</span>
                </div>
                <input
                  value = {cart.total + order?.distance*10}
                  type="text"
                  className="form-control-lg"
                  aria-label="Amount (to the nearest dollar)"
                  readOnly
                />
                <div className="input-group-append">
                  <span className="input-group-text">$</span>
                </div>
              </div>
              <div>
              <button
                style={{ float: "right" }}
                className="btn btn-success"
                onClick={handleButtonConfirmPayment}
              >
                Xác nhận đặt hàng
              </button>
    
              <br />
              <br />
            </div>
          </div>
          )
        }
        <Link to="/">
            <button style={{ float: "right" }} className="btn-back btn btn-danger">
              Quay lại
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
