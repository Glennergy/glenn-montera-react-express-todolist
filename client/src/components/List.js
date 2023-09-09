import ListItem from "./ListItem";
const List = (props) => {
  
  return (
    <ul id="myUL">
      {props.items.map((item, idx) => (
        <ListItem
          key={idx}
          item={item}
          idx={idx}
          deleteItem={() => props.clickDeleteHandler(idx)}
        />
      ))}
    </ul>
  );
};

export default List;
