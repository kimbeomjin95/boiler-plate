const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true, // 빈 공백 제거
    unique: 1, // 중복방지
  },
  password: {
    type: String,
    maxLength: 5,
  },
  lastname: {
    type: String,
    maxLength: 50,
  },
  role: {
    type: Number, // 1: 관리자, 0: 일반유저
    default: 0,
  },
  image: String,
  token: {
    type: String, // 유효성 관리
  },
  tokenExp: {
    // 토큰이 사용할 수 있는 기간
    type: Number,
  },
});

// 스키마를 모델로 감싸는 것
/**
 * @param modelname(String)
 * @param schema(object)
 *
 * */
const User = mongoose.model('User', userSchema);

// model을 다른 파일에서도 사용하기 위함
module.exports = { User };
