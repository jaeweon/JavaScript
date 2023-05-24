// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array객체에 모두 담는다.
// JSON으로 변경시킨다.
// day05/shop.json 으로 출력한다.
// readFile을 사용해서 day05/shop.json을 읽어온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 각겨과 총 재고 수를 Object에 담은 후 day05/sum.json으로 출력한다.
// 상품이 3개이기 때문에 프로토타입을 사용하는 것이 적합하다.

let file = require('fs');
let product = new Array();
let lee = {name : '연필', price : 1400, num : 3};
let jae = {name : '본드', price : 2500, num : 4};
let weon = {name : '지우개', price : 500, num : 7};
product.push(lee);
product.push(jae);
product.push(weon);

let productJSON = JSON.stringify(product);
console.log(productJSON);

file.writeFile('prac5/product.json', productJSON, "utf-8", function(e){
    if(e){
        console.log(e);
    }else{
        console.log("출력 완료");
    }
});