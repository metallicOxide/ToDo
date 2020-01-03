import { useState } from "react";

export const useItemHooks = (initialValue = []) => {
  const [items, setItems] = useState(initialValue);
  // set initial value of search to items
  const [search, setSearch] = useState(items);
  // id for drag and drop
  const [idNum, setIdNum] = useState(0);

  return {
    items,
    setItems,
    search,
    setSearch,
    // add item hook
    addItem: text => {
      if (text.trim() !== "") {
        const id = `item-${idNum}`;
        const newItems = items.concat({
          id,
          text,
          checked: false
        });
        setItems(newItems);
        // refresh search after adding in new items
        // console.log(newItems);
        setSearch(newItems);
        // increment id
        setIdNum(idNum + 1);
      }
    },

    // listener for checkbox
    checkItem: id => {
      const checkMap = list => {
        const newList = list.map((item, index) => {
          if (id === index) {
            item.checked = !item.checked;
          }
          return item;
        });
        return newList;
      };

      setItems(checkMap(items));

      setSearch(checkMap(search));
    },

    // listener for remove item
    removeItem: id => {
      const removeFilter = list => {
        return list.filter((item, index) => id !== index);
      };
      // const newItems = items.filter((item, index) => id !== index);
      // setItems(newItems);
      // setSearch(newItems);
      setItems(removeFilter(items));
      setSearch(removeFilter(search));
    },

    // listener for search bar
    searchItem: e => {
      const searchTgt = e.target.value;
      // set search to empty array first
      if (searchTgt === "") {
        // empty search, add everything
        setSearch(items);
      } else {
        // else go through items and only add unique items that matches
        setSearch(
          items.filter(item =>
            item.text.toLowerCase().includes(searchTgt.toLowerCase())
          )
        );
      }
    },

    // listener for edit
    editItem: (id, value) => {
      const editMap = list => {
        return list.map((item, index) => {
          if (id === index) {
            item.text = value;
          }
          return item;
        });
      };
      setItems(editMap(items));
      setSearch(editMap(search));
    }
  };
};
