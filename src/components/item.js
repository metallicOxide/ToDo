import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Item = props => {
  return (
    <ListItem divider={props.divider}>
      <Checkbox onClick={props.onCheckBoxToggle} checked={props.checked} />
      <ListItemText primary={props.text} />
      <ListItemSecondaryAction>
        <IconButton onClick={props.onTrashClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
