import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
