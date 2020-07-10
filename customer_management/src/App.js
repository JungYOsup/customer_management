import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((custom) => (
          <Customer
            key={custom.id}
            id={custom.id}
            name={custom.name}
            image={custom.image}
            birthday={custom.birthday}
            gender={custom.gender}
            job={custom.job}
          />
        ))}
      </div>
    );
  }
}

export default App;
