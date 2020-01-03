import { useState } from "react";

export const useFormHooks = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    clearValue: () => setValue(""),
    changeValue: e => setValue(e.target.value),
    onEnterKey: (event, callback) => {
      // handle enter presses
      if (event.keyCode === 13 || event.which === 13) {
        callback(event);
        return true;
      }
      return false;
    }
  };
};
