import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

import './Footer.scss';

const Footer = () => {

    return (
        <div className={"footer-wrapper"}>
        <Row >
            <Col span={12}>
                <Typography.Title level={3}>Chậu cây cảnh đẹp</Typography.Title>
                <Typography.Text>0912345678</Typography.Text>
                <Typography.Text className={"mt-12"}>Từ 08:00 tới 20:00 cả cuối tuần và ngày lễ</Typography.Text>
                <Typography.Text className={"mt-12"}>Địa chỉ: Bách Khoa - Hai Bà Trưng - Hà Nội</Typography.Text>

            </Col>
            <Col span={12} >
                <div className={"footer-wrapper-social"}>
                    <Typography.Title level={3}>Mạng xã hội</Typography.Title>
                    <a href="#">
                        <InstagramOutlined />
                    </a>
                    <a href="#">
                        <FacebookOutlined />
                    </a>
                    <a href="#">
                        <TwitterOutlined />
                    </a>
                </div>
            </Col>
        </Row>
        <Row className={"footer-wrapper-copyright"}>
            <Typography.Text>© 2022 Copy right</Typography.Text>
        </Row>
    </div>
    );
}
export default Footer;