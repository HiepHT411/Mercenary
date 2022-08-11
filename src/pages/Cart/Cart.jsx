import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [orderPrice, setOrderPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleButtonConfirmPayment = () => {
    setCustomerName("");
    setEmail("");
    setPhone("");
    setFromAddress("");
    setToAddress("");
    setOrderPrice(0);
    setTotalPrice(0);
  };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleFromAddressChange = (e) => {
    setFromAddress(e.target.value);
  };

  const handleToAddressChange = (e) => {
    setToAddress(e.target.value);
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
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item?.slug}</td>
                <td>{item?.name}</td>
                <td>{item?.weight}</td>
                <td>{item?.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div class="card-body">
          <form>
            <div class="form-group w-50">
              <div class="col-xs-4">
                <label>Họ và tên: </label>
                <input
                  value={customerName}
                  onChange={handleNameChange}
                  class="form-control"
                  placeholder="Họ và tên"
                  name="customername"
                ></input>
              </div>
            </div>

            <div class="form-group w-50">
              <label>Email: </label>
              <input value={email} onChange={handleEmailChange} class="form-control" placeholder="Email" name="email" />
            </div>
            <div class="form-group w-50">
              <label>Số điện thoại: </label>
              <input
                value={phone}
                onChange={handlePhoneChange}
                class="form-control"
                placeholder="Số điện thoại"
                name="phonenumber"
              />
            </div>
            <div class="form-group w-75">
              <label>Địa chỉ gửi: </label>
              <input value={fromAddress} onChange={handleFromAddressChange}
                class="form-control"
                placeholder="Địa chỉ gửi"
                name="fromaddress"
              />
            </div>
            <div class="form-group w-75">
              <label>Địa chỉ nhận: </label>
              <input
                value={toAddress}
                onChange={handleToAddressChange}
                class="form-control"
                placeholder="Địa chỉ nhận"
                name="toaddress"
              />
            </div>
          </form>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              $ Tổng giá trị sản phẩm
            </span>
          </div>
          <input
            value={orderPrice}
            type="text"
            class="form-control-md"
            aria-label="Amount (to the nearest dollar)"
            readOnly
          />
          <div class="input-group-append">
            <span class="input-group-text">VND</span>
          </div>
        </div>

        {/* <div class="input-group w-75 mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Đơn vị vận chuyển</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Chọn đơn vị vận chuyển</option>
    <option value="15">Giao hàng nhanh 15k/1km</option>
    <option value="12">Giao hàng tiết kiệm 12k/1km</option>
    <option value="10">Bưu điện 10k/1km</option>
  </select>
</div> */}

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$ Tổng giá trị đơn hàng</span>
          </div>
          <input
            value={totalPrice}
            type="text"
            class="form-control-lg"
            aria-label="Amount (to the nearest dollar)"
            readOnly
          />
          <div class="input-group-append">
            <span class="input-group-text">VND</span>
          </div>
        </div>
        <div>
          <button
            style={{ float: "right" }}
            class="btn btn-success"
            onClick={handleButtonConfirmPayment}
          >
            Xác nhận đặt hàng
          </button>

          <br />
          <br />
          <button style={{ float: "right" }} class="btn btn-danger">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
