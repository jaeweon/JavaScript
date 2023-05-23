// // callback
// // JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하고,
// // 함수를 리턴할 수도 있다.
// function mul(num1, num2, callback){
//     // 외부에서ㅏ callback에 함수를 전달했다면,
//     if(callback){
//         // 매개변수로 결과를 전달해준다.
//         callback(num1 * num2)
//     }
// }

// function print(result){
//     console.log(result)
// }
// mul(4, 2, print)


function pay(name, price, count, callback){
    let total = price * count
    if(callback){
        // 상품명과 전체 가격을 여기서 출력하지 않고,
        // callback 함수에서 출력한다.
        callback(name, total)
    }
}

// pay 함수에서 연산된 결과를 total로 전달받은 뒤
function print(name, total){
    // 상품명과 total을 적절하게 출력한다.
    console.log(name + ": " + total + "원")
}

pay("EX", 1900, 4, print)







