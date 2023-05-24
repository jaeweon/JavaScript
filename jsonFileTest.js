let file = require('fs') // node.js 에 있는 모듈을 import
let user = new Object()
let userJSON

user.name = "LEE"
user.id = "asdf1234"
user.pw = "4321fdsa"
userJSON = JSON.stringify(user)
console.log(userJSON)

// writeFile(경로, 작성할 내용, 인코딩 방식, 콜백함수(에러객체))
/* file.writeFile("prac5/user.json", userJSON, 'UTF-8', function(e){
    if(e){
        console.log(e)
    }else{
        console.log("file Upload Success")
    }
}) */

// readFile(경로, 인코딩, 콜백함수(에러객체, 내용))
file.readFile("prac5/user.json", 'UTF-8', function(e, data){
    let user = JSON.parse(data)
    console.log(user.name)
    console.log(user.id)
    console.log(user.pw)
})

