import React, { Component } from 'react'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import "./Store.css";
var unhide = document.getElementById("unhide");

export default class SmartPhoneStore extends Component {
    constructor(props){
        super(props);
        this.state={
            products: [
                {
                  id: 1,
                  name: "Samsung Galaxy A10",
                  price: "40906000",
                  img: "assets/img/samsung-galaxy.jpg",
                  info: {
                    screen: "AMOLED Full HD 9.0",
                    os: "Android 9.0",
                    frontCamera: "20MP",
                    backCamera: "Chính 48MB, phụ 30MP",
                  },
                  ram: "4 GB",
                  rom: "64 GB",
                },
                {
                  id: 2,
                  name: "IPhone12",
                  price: "200306000",
                  img: "assets/img/iphone-12.jpg",
                  info: {
                    screen: "Full HD 12.0",
                    os: "IOS 14",
                    frontCamera: "20MP",
                    backCamera: "Chính 100MB, phụ 30MP",
                  },
                  ram: "16 GB",
                  rom: "32 GB",
                },
                {
                  id: 3,
                  name: "Xiaomi Note 10",
                  price: "10005000",
                  img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
                  info: {
                    screen: "OLED 10.0",
                    os: "Android 8.0",
                    frontCamera: "69MP",
                    backCamera: "Chính 96MB, phụ 30MP",
                  },
                  ram: "10 GB",
                  rom: "64 GB",
                },
              ],
            selectedProduct:{id: 1,
                name: "Samsung Galaxy A10",
                price: "40906000",
                img: "assets/img/samsung-galaxy.jpg",
                info: {
                  screen: "AMOLED Full HD 9.0",
                  os: "Android 9.0",
                  frontCamera: "20MP",
                  backCamera: "Chính 48MB, phụ 30MP",
                },
                ram: "4 GB",
                rom: "64 GB",},
            cart: { id:"" ,
              name:"" ,
              price:"",
              img:"",
              qty:"",
              tien:"",
            }
        }
    }

    onSelectedProduct = (id) => {
        const products = this.state.products;
        const idx = products.findIndex((product) => product.id ===id);
        if (idx !== -1){
          this.setState({
            selectedProduct: products[idx],
          })
        }
    }
    openCart = () => {
      unhide.style.display = "block";
      unhide.style.background = "lightskyblue";
    }
    render() {
        const {products, selectedProduct} = this.state;
        return (
            <div>
                <div className="store">
                  <h1 className="khoangCach">store điện thoại</h1>
                  <button onClick={this.openCart}>
                  <img class="hinhCart" src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="" />
                  </button>
                  <div id="unhide" className="hide">
                      <h3 className="margin">Thông tin giỏ hàng</h3>
                      <div className="chiaCot">
                        <div>
                          <p className="margin">Img</p>
                          <p><img className="hinhTrongGio margin" src="assets/img/iphone-12.jpg" /></p>
                        </div>
                        <div>
                          <p className="margin">Số id</p>
                          <p className="margin">1</p>
                        </div>
                        <div>
                          <p className="margin">Name</p>
                          <p className="margin">iphone-12</p>
                        </div>
                        <div>
                          <p className="margin">Số lượng</p>
                          <p className="margin">1</p>
                        </div>
                        <div>
                          <p className="margin">Thành tiền</p>
                          <p className="margin">20000000</p>
                        </div>
                      </div>
                  </div> 
                </div> 
                <ProductList products = {products}
                            onSelectedProduct = { this.onSelectedProduct}
                />
                <ProductDetail productDetail={selectedProduct} />
            </div>
        )
    }
}
