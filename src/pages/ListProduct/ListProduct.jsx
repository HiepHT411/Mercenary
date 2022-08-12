import React from 'react';
import "./ListProduct.scss"
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import * as productService from "../../services/productService"
import {addProduct} from "../../redux/features/cartSlice"

function ListProduct (){
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1)
    const [products, setProducts] = useState(()=>{
        const fetchItems = async()=>{
            const res = await productService.getAllProducts();
            setProducts(res.data)
        }
        fetchItems();
    })
    const onClickBuy = ({item})=>{
        dispatch(addProduct({...item,quantity}))
    }
    return (
        <div className='wrapper-list'>
            <div className="container-list">
                <div className="title">
                    <h2 style={{ color: "#06a006" }}>Danh sách sản phẩm</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Trọng lượng(kg)</th>
                            <th>Mua</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((item,index)=>(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item?.slug}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.weight}</td>
                                    <td>
                                        <button onClick={()=>onClickBuy({item})} className='btn-buy'>Mua sản phẩm</button>
                                    </td>
                                 </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListProduct;
