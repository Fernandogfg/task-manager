function Task(props) {
  return(<div className = 'task'>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>)
}
export default Task;
