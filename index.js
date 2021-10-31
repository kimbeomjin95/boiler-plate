const express = require('express');
const app = express();
const port = 3000;

// 몽구스를 이용해서 application과 몽고DB 연결
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://beomjin:<Rlaqjawls95!!>@boilerplate.iuae5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB 연결 완료'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
