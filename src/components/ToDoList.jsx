import ToDoItem from './ToDoItem';

function ToDoList(props) {
  return (
    <ul>
      {props.xyz.map((item, idx) => (
        <ToDoItem SingleToDo={item} key={idx} />
      ))}
    </ul>
  );
}

export default ToDoList;
