import React from "react";
import Banner from "./components/banner";
import ItemForm from "./components/itemForm";
import ItemList from "./components/itemList";
import { useFormHooks } from "./hook/formHooks";
import { useItemHooks } from "./hook/itemHooks";
import { useSearchBarHooks} from "./hook/searchBarHooks"
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const {
    items,
    setItems,
    search,
    setSearch,
    addItem,
    checkItem,
    removeItem,
    searchItem,
    editItem
  } = useItemHooks();
  const { value, clearValue, changeValue, onEnterKey } = useFormHooks();
  const { searchBar, clearSearchBar, setSearchBar } = useSearchBarHooks();

  // clears add form and adds item into list
  // additionally, clear search
  const clearFormAddItem = () => {
    clearValue();
    clearSearchBar();
    addItem(value);
  };

  const searchItemUpdateValue = e => {
    setSearchBar(e.target.value);
    searchItem(e);
  }

  const reorder = (list, startIndex, endIndex) => {
    console.log(list);
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };

  const onDrag = result => {
    console.log(result);
    // dragged out of bounds
    if (!result.destination) {
      return;
    }

    // no changes to index
    if (result.destination.index === result.source.index) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
    setSearch(newItems);
  };

  return (
    <div>
      <Banner searchHandler={searchItemUpdateValue} searchValue={searchBar}/>
      <ItemForm
        inputValue={value}
        onInputChange={changeValue}
        onInputKeyPress={event => onEnterKey(event, clearFormAddItem)}
        onButtonClick={clearFormAddItem}
      />
      <DragDropContext onDragEnd={onDrag}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ItemList
                items={search}
                onItemRemove={id => removeItem(id)}
                onItemCheck={id => checkItem(id)}
                onEdit={(id, event) => editItem(id, event.target.value)}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
