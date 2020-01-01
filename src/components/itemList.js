import React from "react";
import Item from "./item";
import List from "@material-ui/core/List";

const ItemList = props => {
  return (
    <div className="itemList">
      {props.items.length > 0 && (
        <List style={{ overflow: "scroll" }}>
          {props.items.map((todo, id) => (
            <Item
              text={todo.text}
              checked={todo.checked}
              key={`TodoItem.${id}`}
              index={id}
              divider={id !== props.items.length - 1}
              onTrashClick={() => props.onItemRemove(id)}
              onCheckBoxToggle={() => props.onItemCheck(id)}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default ItemList;
