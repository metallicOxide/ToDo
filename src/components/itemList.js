import React from "react";
import Item from "./item";
import List from "@material-ui/core/List";

const ItemList = props => {
  return (
    <div className="itemList">
      {props.items.length > 0 && (
        <List style={{ overflow: "scroll" }}>
          {props.items.map((todo, index) => (
            <Item
              text={todo.text}
              checked={todo.checked}
              key={todo.id}
              id= {todo.id}
              index={index}
              divider={index !== props.items.length - 1}
              onTrashClick={() => props.onItemRemove(index)}
              onCheckBoxToggle={() => props.onItemCheck(index)}
              onEditItem = {e => props.onEdit(index, e)}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default ItemList;
