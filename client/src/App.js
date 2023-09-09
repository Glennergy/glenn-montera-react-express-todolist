import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  console.log(process.env);

  const listItems = [];
  const [items, setItems] = useState(listItems);

  // Get all the TODOS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/todos`)
      .then((res) => setItems(res.data))
      .catch((e) => console.log(e));
  }, []);

  const clickAddHandler = (item) => {
    console.log("Hey you clicked Add!!!", item);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/todos`, {
        listItem: item,
      })
      .then((res) => setItems(res.data))
      .catch((e) => console.log(e));
  };

  const clickDeleteHandler = (idx) => {
    console.log("Hey you clicked Delete!!!", idx);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/todos`, {
        idx: idx,
      })
      .then((res) => setItems(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Header title="My Notes" clickAddHandler={clickAddHandler} />
      <List items={items} clickDeleteHandler={clickDeleteHandler} />
    </>
  );
}

export default App;
