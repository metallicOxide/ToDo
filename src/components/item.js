import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  InputBase,
  Slide
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Draggable } from "react-beautiful-dnd";

const Item = props => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {provided => (
        <Slide
          direction="up"
          in={true}
          timeout={250}
          mountOnEnter
          unmountOnExit
        >
          <ListItem
            divider={props.divider}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Checkbox
              onClick={props.onCheckBoxToggle}
              checked={props.checked}
            />
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
        </Slide>
      )}
    </Draggable>
  );
};

export default Item;
