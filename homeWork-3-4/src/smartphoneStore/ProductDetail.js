import React, { Component } from 'react'
import "./Store.css";

export default class ProductDetail extends Component {
    render() {
        const {name, img, info, ram, rom} = this.props.productDetail;
        const {backCamera, frontCamera, os, screen} = info
        return (
            <div className="cardDetail">
                <div className="row">
                    <div className="col1">
                        <h3>{name} </h3>
                        <img src={img}  className="hinhDetail" />
                    </div>
                    <div className="col2">
                        <div className="table">
                            <h3>Thông số kĩ thuật</h3>
                            <p> Màn hình: {screen} </p>
                            <p> Hệ điều hành: {os} </p>
                            <p> Camera trước: {frontCamera} </p>
                            <p> Camera sau: {backCamera} </p>
                            <p> Ram: {ram} </p>
                            <p> Rom: {rom} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
