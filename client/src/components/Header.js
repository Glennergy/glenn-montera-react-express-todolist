import { useState } from "react";

const Header = (props) => {
  const addItem = () => {
    props.clickAddHandler(note);
  }
  const [note, setNote] = useState('');  

  return (
    <header className="header">
      <h2 style={{ margin: "5px" }}>{props.title}</h2>
      <input type="text" id="myInput" placeholder="Title..." onChange={(evt) => {setNote(evt.target.value)}}/>
      <span className="addBtn" onClick={addItem}>Add</span>
    </header>
  );
};

export default Header;
