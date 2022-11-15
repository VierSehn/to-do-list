const ToDoListItem = ({ action }) => (
  <div>
    <h1 className="to-do-list-item">{action.title}</h1>
  </div>
);

export default ToDoListItem;
