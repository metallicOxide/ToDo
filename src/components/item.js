import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  InputBase
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Draggable } from "react-beautiful-dnd";

const Item = props => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {provided => (
        <ListItem
          divider={props.divider}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox onClick={props.onCheckBoxToggle} checked={props.checked} />
          <InputBase
            value={props.text}
            onChange={props.onEditItem}
            fullWidth
          ></InputBase>
          <ListItemSecondaryAction>
            <IconButton onClick={props.onTrashClick}>
              <DeleteOutlined />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </Draggable>
  );
};

export default Item;
