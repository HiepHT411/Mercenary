import React, {useState } from 'react';
import "./ListOrder.scss"
import * as orderService from "../../services/orderService"
import * as productService from "../../services/productService"
const ListOrder = ()=>{
    const [order,setOrder] = useState(null)
    const [products,setProducts] = useState([])
    const [orders,setOrders] = useState(()=>{
        const fetchOrders = async()=>{
            const res = await orderService.getAll()
            setOrders(res.data)
        }
        fetchOrders();
    })
    const [open,setOpen] = useState(false)
    const openBoxOrder = ({item})=>{
        const fetchProducts = async()=>{
            const res = await productService.getProducts(item?.products)
            setProducts(res.data)
        }
        fetchProducts();
        setOrder(item)
        setOpen(true)
    }
    console.log(order, products)
    return (
        <div className='wrapper-order'>
            <div className="container">
                <div className="title">
                    <h2>Danh sách đơn hàng</h2>
                </div>
                <div className="table">
                    <table>
                        {/* <div className="bodyTable"> */}
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã đơn hàng</th>
                                    <th>Người nhận</th>
                                    <th>Số điện thoại</th>
                                    <th>Tổng tiền</th>
                                    <th>Địa chỉ gửi</th>
                                    <th>Địa chỉ nhận</th>
                                    <th>Tình trạng đơn hàng</th>
                                </tr>
                            </thead>
                                <tbody className=''>
                                    {orders?.map((item,index)=>(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td onClick={()=>openBoxOrder({item})} ><strong>{item?._id}</strong></td>
                                            <td>{item?.name}</td>
                                            <td>{item?.phone}</td>
                                            <td>{item?.total}</td>
                                            <td>{item?.from}</td>
                                            <td>{item?.to}</td>
                                            <td className='status'>Đang vận chuyển</td>
                                        </tr>
                                    ))}
                                    {orders?.length === 0&&(
                                        <tr>
                                            <p>Không có đơn hàng nào</p>
                                        </tr>
                                    )}
                                </tbody>
                        {/* </div> */}
                    </table>
                </div>
            </div>
            {open&&(
                <div className="boxOrder">
                    <div className="wrapper-box">
                        <div className="heading">
                            <h2>Chi tiết đơn hàng</h2>
                            <div className="remove">
                                <button onClick={()=>setOpen(false)} >X</button>
                            </div>
                        </div>
                        <div className="body">
                            <span>Thông tin đơn hàng: {order?._id} </span>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Trọng lượng</th>
                                        <th>Số lượng</th>
                                        <th>Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products?.map((item,index)=>(
                                            <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.weight}</td>
                                                <td>1</td>
                                                <th>{item.price}</th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListOrder;