import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { Affix, Badge, Col, Row, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";


const NavBar = () => {
  return (
    <>
      <Affix>
        <div className={"navbar-wrapper"}>
          <Row style={{ padding: "5px 50px" }}>
            
            <Col span={12}>
              <ul>
                <li>
                  <h3>Ươm Mầm Cuộc Sống</h3>
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
                  <Badge count={4} showZero size="small" style={{ color: "#f7f712"}}>
                    <Link to={"/cart"}>
                    <ShoppingCartOutlined  />
                    </Link>
                  </Badge>
                </li>
              </ul>
            </Col>
            {/* <Col span={12}>
              <ul>
                
                {usersData ? (
                                    <>
                                        <Link to={ACCOUNT}>
                                            <li>
                                                <UserOutlined />
                                                MY ACCOUNT
                                            </li>
                                        </Link>
                                        <Link to={BASE} onClick={handleLogout}>
                                            <li>
                                                <LogoutOutlined />
                                                EXIT
                                            </li>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={LOGIN}>
                                            <li>
                                                <Space align={"baseline"}>
                                                    <LoginOutlined />
                                                    SIGN IN
                                                </Space>
                                            </li>
                                        </Link>
                                        <Link to={REGISTRATION}>
                                            <li>
                                                <UserAddOutlined />
                                                SIGN UP
                                            </li>
                                        </Link>
                                    </>
                                )}
              </ul>
            </Col> */}
          </Row>
        </div>
      </Affix>
    </>
  );
};

export default NavBar;
