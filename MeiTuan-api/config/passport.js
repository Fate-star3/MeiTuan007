// passport.js是Nodejs中的一个做登录验证的中间件，极其灵活和模块化，并且可与Express、Sails等Web框架无缝集成。Passport功能单一，
// 即只能做登录验证，但非常强大，支持本地账号验证和第三方账号登录验证（OAuth和OpenID等），支持大多数Web网站和服务。
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");//用户数据表
const keys = require("./keys");

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

    // 在passport中已经得到了对应的内容，就可以对得到的内容进行查询
    User.findById(jwt_payload.id)
      .then(user => {//查询到返回一个用户
        if (user) {//判断用户是否存在
          return done(null, user); //把user返回回去
        }

        return done(null, false);//不存在，返回一个false
      })
      .catch(err => console.log(err));
  }));
}