import React, { Component } from 'react'
import "./Store.css";
export default class ProductItem extends Component {
    render() {
        const {name, price, img, id} = this.props.product;
        const {onSelectedProduct} = this.props;
        return (
            <div className="card">
                <p className="margin">
                <img src={img} className="hinh" />
                </p>
                <h3 className="margin">{name}</h3>
                <p className="margin">{price}</p>
                <p className="margin">
                <button onClick={() => onSelectedProduct(id)}>xem chi tiết</button>
                <button>thêm vào giỏ hàng</button>
                </p>
            </div>

        )
    }
}
