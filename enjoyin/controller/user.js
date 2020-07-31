const { User } = require("./../models");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { user_id, password } = req.body;
  const secret = req.app.get("jwt-secret");

  try {
    const user = await User.findOne({
      where: {
        user_id
      }
    });
    if (user.password === password) {
      const access_token = await jwt.sign(
        {
          user_id: user.user_id,
          email: user.email
        },
        secret
      );
      res.status(200).json({
        message: "로그인 성공",
        access_token
      });
    } else {
      res.status(409).json({
        message: "틀린 비밀번호"
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "존재하지 않는 사용자"
    });
  }
};

const signup = async (req, res, next) => {
  const { user_id, password, email, user_class } = req.body;

  try {
    await User.create({
      user_id,
      password,
      email,
      user_class
    });
    res.status(200).json({
      message: "회원가입 성공"
    });
  } catch (err) {
    res.status(409).json({
      message: "이미 존재하는 아이디",
      err: err.message
    });
  }
};

module.exports = {
  auth,
  signup
};
