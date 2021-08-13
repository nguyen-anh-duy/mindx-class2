import React, { Component } from 'react'
import "./Store.css";


export default class Cart extends Component {
    render() {
        const { cart, onHandleAmountCartItemChange, onDeleteCartItem } = this.props;
        let totalPrice = 0;
        for( const cartItem of cart){
           totalPrice += cartItem.amount * cartItem.price;
        }
        return (
            <div>
                <table>
                        <tr>
                            <th>Số id</th>
                            <th>Hình ảnh</th>
                            <th>Name</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th>Total {totalPrice} </th>

                        </tr>
                </table>
                {
                   cart.length>0 ? cart.map((cartItem) => {
                        const {id, img, name, amount, price} = cartItem;
                        return <div> 
                            <table>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td><img className="hinhTrongGio margin" src= {img} /></td>
                                    <td>{name}</td>
                                    <td>
                                        <button onClick={()=> onHandleAmountCartItemChange(id,-1)} className="margin-ngang" disabled={amount<=1 ? true : false}>-</button>
                                        {amount}
                                        <button onClick={()=> onHandleAmountCartItemChange(id,+1)} className="margin-ngang">+</button>
                                    </td>
                                    <td>{price}</td>
                                    <td>{price*amount}</td>
                                    <td>
                                        <button onClick={() => onDeleteCartItem(id)} >xóa</button>
                                    </td>
                                </tr>
                            </table>
                    </div>
                    }) : <p>không có sản phẩm vui lòng chọn sản phẩm</p>
                }    
            </div>
        )
    }
}
