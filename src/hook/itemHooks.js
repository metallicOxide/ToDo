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
        setItems(
          items.concat({
            text,
            checked: false
          })
        );
        // refresh search after adding in new items
        console.log(items);
        setSearch(items);
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
      setItems(items.filter((item, index) => id !== index));
      setSearch(items);
    },

    updateSearch: items => {
      setSearch(items);
    },

    searchItem: e => {
      const searchTgt = e.target.value;
      // set search to empty array first
      setSearch([]);
      if (searchTgt === "") {
        // empty search, add everything
        setSearch(items);
      } else {
        // else go through items and only match those that
        items.map(item => {
          console.log(search, searchTgt)
          if (
            item.text
              .toLowerCase()
              .includes(searchTgt.toLowerCase())
          ) {
            setSearch(search.concat(item));
          }
          return item;
        });
      }
    },

    editItem: (id, value) => {
      setItems(
        items.map((item, index) => {
          if (id === index) {
            item.value = value;
          }
          return item;
        })
      );
    }
  };
};
