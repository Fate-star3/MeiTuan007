// @login & register
const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');


// @route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
router.post('/register', (req, res) => {
  // 查询User数据集合中是否拥有邮箱
  User.findOne({ phone: req.body.phone }).then(user => {
    if (user) {
      return res.status(400).json('手机号已被注册!');
    } else {
      // 随机生成头像
      // const avatar = gravatar.url(req.body.phone, {
      //   s: '200',
      //   r: 'pg',
      //   d: 'mm'
      // });
      // 用户对象
      const newUser = new User({
        phone: req.body.phone,
        password: req.body.password,
      });
      console.log(req.body.phone, req.body.password);
      // name: req.body.name,
      // avatar,
      // identity: req.body.identity
      // 散列hash函数 信息加密
      bcrypt.genSalt(10, function (err, salt) {
        // 将加密后的密码替换用户密码
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(req.body.phone, req.body.password);
            throw err
          } else {
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }

        });
      });
    }
  });
});

// @route  POST api/users/login
// @desc   返回token jwt passport
// @access public
// 用户登录成功后，会返回一个token，这个token相对于一把钥匙，你拿到这把钥匙之后就可以去请求相应的数据，比如说你想拿到数据库里的信息就必须
// 带着这个钥匙（令牌）去拿。

router.post('/login', (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;
  // 查询数据库
  User.findOne({ phone }).then(user => {
    if (!user) {
      return res.status(404).json('用户不存在!');
    }

    // 密码匹配
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        };
        // 1.用户输入账户和密码请求服务器
        // 2.服务器验证用户信息，返回用户一个token值
        // 接收的参数： 规则  加密的名字   过期时间  回调函数
        jwt.sign(rule, keys.secretOrKey, { expiresIn: 99999999999 }, (err, token) => {
          if (err) throw err;

          res.json({
            success: true,
            token: 'qiqi520 ' + token
          });
        });
        // res.json({msg:"success"});
      } else {
        return res.status(400).json('密码错误!');
      }
    });
  });
});

// @route  GET api/users/current
// @desc   return current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      phone: req.user.phone,
      identity: req.user.identity
    });
  }
);


module.exports = router;