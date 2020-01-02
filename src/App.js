import React from "react";
import Banner from "./components/banner";
import ItemForm from "./components/itemForm";
import { useFormHooks } from "./hook/formHooks";
import { useItemHooks } from "./hook/itemHooks";
import ItemList from "./components/itemList";

function App() {
  const {
    items,
    search,
    addItem,
    checkItem,
    removeItem,
    searchItem,
    editItem
  } = useItemHooks();
  const { value, clearValue, changeValue, onEnterKey } = useFormHooks();

  // clears add form and adds item into list
  const clearFormAddItem = () => {
    clearValue();
    addItem(value);
  };

  return (
    <div>
      <Banner searchHandler={searchItem} />
      <ItemForm 
        inputValue={value}
        onInputChange={changeValue}
        onInputKeyPress={event=>onEnterKey(event, clearFormAddItem)}
        onButtonClick={clearFormAddItem}
      />
      <ItemList 
        items={search}
        onItemRemove={id=>removeItem(id)}
        onItemCheck={id=>checkItem(id)}
        onEdit={(id, event) => editItem(id, event.target.value)}
      />
    </div>
  );
}

export default App;