import { useState } from "react";

export const useItemHooks = (initialValue = []) => {
  const [items, setItems] = useState(initialValue);
  // set initial value of search to items
  const [search, setSearch] = useState(items);

  return {
    items,
    search,
    addItem: text => {
      if (text.trim() !== "") {
        const newItems = items.concat({
          text,
          checked: false
        });
        setItems(newItems);
        // refresh search after adding in new items
        // console.log(newItems);
        setSearch(newItems);
      }
    },

    checkItem: id => {
      setItems(
        items.map((item, index) => {
          if (id === index) {
            item.checked = !item.checked;
          }
          return item;
        })
      );
    },

    removeItem: id => {
      const newItems = items.filter((item, index) => id !== index);
      setItems(newItems);
      setSearch(newItems);
    },

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

    editItem: (id, value) => {
      const newItems = items.map((item, index) => {
        if (id === index) {
          item.text = value;
        }
        return item;
      });
      setItems(newItems);
      setSearch(newItems);
    }
  };
};
