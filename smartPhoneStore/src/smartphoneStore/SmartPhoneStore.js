import React, { Component } from 'react'
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import "./Store.css";

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
            cart: [],
        }
    }
    // thêm vào giỏ hàng
    onAddToCart = (product) => {
        const idxItemInCart = this.state.cart.findIndex(
          (item) => item.id === product.id
        );
        if(idxItemInCart === -1) // bằng -1 là chưa tồn tại trong giỏ hàng
        { product.amount = 1; // thêm giá trị amount bằng 1 
          this.setState ({
            cart: [...this.state.cart, product] // thêm sản phẩm vào giỏ hàng
          });
        } else // lúc này đã tồn tại trong giỏ hàng
        { const currentCart = this.state.cart;
          currentCart[idxItemInCart].amount += 1; // cộng thêm 1 cho amount sản phẩm đã có trong giỏ hàng
          this.setState({
            cart: currentCart,
          })
        }
    }
    // sự kiện tăng số lượng trong giỏ hàng
    onPlusAmountCartItem = (id) => {
      const currentCart = this.state.cart;
      const idxItemInCart = currentCart.findIndex((item) => item.id === id); // tìm kiếm cái giống id để cộng thêm 1
      currentCart[idxItemInCart].amount += 1;
      this.setState({
        cart: currentCart,
      })
    }
    // hàm xử lí cả tăng và giảm 
    onHandleAmountCartItemChange = (id, value) => {
      const currentCart = this.state.cart;
      const idxItemInCart = currentCart.findIndex((item) => item.id === id);
      currentCart[idxItemInCart].amount += value;
      this.setState({
        cart: currentCart,
      })
    }
    // xóa sản phẩm trong giỏ hàng
    onDeleteCartItem = (id) => {
      const currentCart = this.state.cart;
      const idxItemInCart = currentCart.findIndex((item) => item.id === id);
      currentCart.slice(idxItemInCart);
      this.setState({
        cart: currentCart,
      })
    }
    // xem chi tiết sản phẩm
    onSelectedProduct = (id) => {
        const products = this.state.products;
        const idx = products.findIndex((product) => product.id ===id);
        if (idx !== -1){
          this.setState({
            selectedProduct: products[idx],
          })
        }
    }
    render() {
        const {products, selectedProduct, cart} = this.state;
        return (
            <div>
                <div className="store">
                  <h1 className="khoangCach">store điện thoại</h1>
                  <button>
                    <div className="ngang">
                    <img class="hinhCart" src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="" />
                    <p className="text">({cart.length})</p>
                    </div>
                  </button>
                  <Cart cart={cart}
                        onHandleAmountCartItemChange={this.onHandleAmountCartItemChange}
                        onDeleteCartItem={this.onDeleteCartItem}
                  />
                </div> 
                <ProductList 
                products = {products}
                onSelectedProduct = { this.onSelectedProduct}
                onAddToCart = {this.onAddToCart}
                />
                <ProductDetail productDetail={selectedProduct} />
            </div>
        )
    }
}
