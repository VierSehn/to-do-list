import ToDoListItem from "../to-do-list-item/to-do-list-item.component";

const ToDoList = ({ actions }) => (
  <div className="to-do-list">
    {actions.map((action) => (
      <ToDoListItem key={action.id} action={action} />
    ))}
  </div>
);

export default ToDoList;
