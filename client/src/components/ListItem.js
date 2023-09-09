const ListItem = (props) => {
    return (
        <li key={props.idx}>{props.item} <span className="close" onClick={() => props.deleteItem(props.idx)}>×</span> </li>
    );
}

export default ListItem;