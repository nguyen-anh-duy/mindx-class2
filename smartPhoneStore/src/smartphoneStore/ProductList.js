import React, { Component } from 'react'
import ProductItem from './ProductItem'
import "./Store.css";

export default class ProductList extends Component {
    render() {
        const { products, onSelectedProduct, onAddToCart } = this.props;
        return (
            <div className="cards">
                {
                    products.map((productItem, index)=>{
                        return <ProductItem 
                        product={productItem} key={index}
                        onSelectedProduct={onSelectedProduct}
                        onAddToCart={onAddToCart} />
                    })
                }
            </div>
        )
    }
}
