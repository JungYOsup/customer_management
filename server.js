const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      name: "홍길동",
      image: "https://placeimg.com/64/64/1",
      birthday: 960122,
      gender: "남",
      job: "대학생",
    },
    {
      id: 2,
      name: "정요섭",
      image: "https://placeimg.com/64/64/2",
      birthday: 911115,
      gender: "남",
      job: "대학생",
    },
    {
      id: 3,
      name: "김수진",
      image: "https://placeimg.com/64/64/3",
      birthday: 951207,
      gender: "여",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
