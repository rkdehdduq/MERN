const mongoose = require("mongoose");

// 스키마 만들기
const userSchema = mongoose.Schema({
    name : { 
        type : String, 
        maxlength: 50
    },
    email: { 
        type: String, 
        minlength: 5
    }, 
    lastname: { 
        type : String, 
        maxlength : 50
    }, 
    role: { 
        type: Number ,
        default : 0
    }, 
    image: String, 
    token: { 
        type: String
    },
    tokenExp: { 
        type : Number
    }
})

//스키마를 모델로 감싸기
const User = mongoose.model("User", userSchema)

//이 모델을 다른 파일에서도 사용하기 위해 
module.exports = {User}