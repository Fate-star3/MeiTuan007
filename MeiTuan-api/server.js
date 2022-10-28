// 引入express和MongoDB数据库
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
const passport = require('passport');

// 路由设置
const users = require('./routes/users');

// 获取线上的数据库地址
const db = require('./config/keys').mongoURI;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 连接数据库
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// passport 初始化
app.use(passport.initialize());

require('./config/passport')(passport);


// 挂载路由
app.use('/api/users', users);


// process.env.PORT：读取当前目录下环境变量port的值
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
