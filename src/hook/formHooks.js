import { useState } from "react";

export const useFormHooks = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    clearValue: () => setValue(""),
    changeValue: e => setValue(e.target.value),
    onEnterKey: (event, callback) => {
        if (event.keyCode === 13) {
            callback(event);
            return true;
        } 
        return false;
    }
  };
};
