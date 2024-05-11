const express = require('express');
const app = express();
const port = 3000;
// body-parser 가져오기 
const bodyParser = require('body-parser');
// user 모델 가져오기
const {User} = require("./models/User");

// DB 토큰 보안
const config = require('./config/key');

// bodyParser 옵션주기 
// application/x-www-form-urlencoded 인코딩 방식이란?
//데이터를 "key: value" 와 같은 형태로 만들어 주는 방식입니다. 
app.use(bodyParser.urlencoded({extended: true}))

//application/json
app.use(bodyParser.json())

//mongodb 연결 
const { default: mongoose } = require('mongoose')
const { builtinModules } = require('module')
mongoose
    .connect(config.mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))


app.get('/', function (req, res) {
  res.send('Hello World \n제대로 해보자 아좌좌좌좌!')
})

// register router 만들기
app.post('/register', (req, res) =>{ 

    // 회원가입 할때 필요한 정보들을 client에서 가져오면 
    //그것들을 DB 에 넣어준다
    const user  = new User(req.body)

    user.save((err, userInfo) => { 
        if(err) 
        return res.json({success: false, err})
        return res.status(200).json({success: true})
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))