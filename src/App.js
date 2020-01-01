import React from "react";
import Banner from "./components/banner";
import ItemForm from "./components/itemForm";
import { useFormHooks } from "./hook/formHooks";
import { useItemHooks } from "./hook/itemHooks";
import ItemList from "./components/itemList";

function App() {
  const { value, clearValue, changeValue, onEnterKey } = useFormHooks();
  const { searchValue, clearSearch, changeSearch, onEnterSearch } = useFormHooks();
  const {
    items,
    search,
    addItem,
    checkItem,
    removeItem,
    updateSearch,
    searchItem,
    editItem
  } = useItemHooks();

  const clearFormAddItem = () => {
    clearValue();
    addItem(value);
    console.log("In wrapper function")
    console.log(items)
  };

  const clearFormSearch = () => {
    searchItem(searchValue);
    clearSearch();
  };

  // const addUpdateSearch = () => {
  //   addItem(value);
  //   updateSearch(items);
  // }

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
        items={items}
        onItemRemove={id=>removeItem(id)}
        onItemCheck={id=>checkItem(id)}
      />
    </div>
  );
}

export default App;

// import { useInputValue, useTodos } from "./custom-hooks";

// import Layout from "./components/Layout";

// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";

// const TodoApp = memo(props => {
//   const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
//   const { todos, addTodo, checkTodo, removeTodo } = useTodos();

//   const clearInputAndAddTodo = _ => {
//     clearInput();
//     addTodo(inputValue);
//   };

//   return (
//     <Layout>
//       <AddTodo
//         inputValue={inputValue}
//         onInputChange={changeInput}
//         onButtonClick={clearInputAndAddTodo}
//         onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
//       />
//       <TodoList
//         items={todos}
//         onItemCheck={idx => checkTodo(idx)}
//         onItemRemove={idx => removeTodo(idx)}
//       />
//     </Layout>
//   );
// });

// const rootElement = document.getElementById("root");
// ReactDOM.render(<TodoApp />, rootElement);
