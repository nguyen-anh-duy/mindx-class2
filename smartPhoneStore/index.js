// bai 3
var products = document.querySelector(".products");
var url = "https://60ae0d5e80a61f00173324bc.mockapi.io/products";
var imageNotFound = "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1732584299.jpg"
var fetchAllProduct = async () => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        renderUI(data);
    } catch (error) {
        alert("bad connection");
    }
}
var renderUI = (data) => {
    let result = data.map(product => {
        let {image, name, errorDescription, sku, id, color} = product
        return `<div class="product">
                <img class="hinhSp" src="${image||imageNotFound}" alt="">
                <h3 class="margin">${name}</h3>
                <p class="margin">Description: ${errorDescription}</p>
                <p class="margin">sku: ${sku}</p>
                <p class="margin">id: ${id}</p>
                <p class="margin">color: ${color||0}</p>        
                </div>`;
    })
    products.innerHTML = result.join("");
}
fetchAllProduct();

// bai 1
var num1 = "123";
var ReverseNumber = (num) =>{
    let arr = num.split("");
    let [a,b,c] = arr;
    console.log(c,b,a);
}
ReverseNumber(num1);

// bai 2
var RomanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
var soVidu = "II"
var RomanToNumber = (roman) =>{
    let {I, V, X, L, C, D, M } = roman;
    let result = soVidu.split("");
    for (let i=0; i<result.length; i++){
        if(result[i]==I){
            console.log(I);
        }
    }
}
RomanToNumber(RomanNumber);