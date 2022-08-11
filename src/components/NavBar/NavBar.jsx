import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { Affix, Badge, Col, Row, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector(state=>state.cart)
  console.log(cart);
  return (
    <div className="wrapper-nav">
      <Affix>
        <div className={"navbar-wrapper"}>
          <Row style={{  }}>
            <Col span={24}>
              <ul>
                <li>
                  <h4>Ươm Mầm Cuộc Sống</h4>
                </li>

                <li>
                  <Link to={"/list/product"}>Sản phẩm</Link>
                </li>
                <li>
                  <Link to={"/list/order"}>Đơn hàng</Link>
                </li>
                <li>
                  <Link to={"/"}>Liên hệ</Link>
                </li>
                <li className={"navbar-cart"}>
                  <Badge count={cart?.quantity} showZero size="small" style={{ color: "#f7f712"}}>
                    <Link to={"/cart"}>
                    <ShoppingCartOutlined  />
                    </Link>
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Affix>
    </div>
  );
};

export default NavBar;
