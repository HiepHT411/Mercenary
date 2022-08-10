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
          <Row style={{ padding: "0px 50px" }}>
            <Col span={4}>
                <ul>
                <li>
                  <h2>Ươm Mầm Cuộc Sống</h2>
                </li>
                </ul>
            </Col>
            <Col span={8}>
              <ul>
                

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
                  <Badge count={0} size="small" color={"red"}>
                    <Link to={"/cart"}>
                    <ShoppingCartOutlined />
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
