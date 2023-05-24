// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON형식으로 변환한 뒤, day05/product.json으로 출력한다.
// day05/product.json에 있는 JSON 형식을 JS Object타입으로 변환한다.
// 각 프로퍼티를 출력한다.
let file = require('fs')
let product = new Object()
let productJSON

product.name = "keyboard"
product.price = 129000
product.count = 3

productJSON = JSON.stringify(product)

// file.writeFile("prac5/product.json", productJSON, 'UTF-8', function(e){
//     if(e){
//         console.log(e)
//     }else{
//         console.log("file upload Success")
//     }
// })

file.readFile("prac5/product.json", 'UTF-8', function(e, data){
    let product = JSON.parse(data)
    console.log(product.name)
    console.log(product.price)
    console.log(product.count)
})