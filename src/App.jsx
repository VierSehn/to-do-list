import { useEffect, useState } from "react";

import ToDoList from "./components/to-do-list/to-do-list.component";

const App = () => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then(setActions);
  }, []);

  return (
    <div className="App">
      <ToDoList actions={actions} />
    </div>
  );
};

export default App;
