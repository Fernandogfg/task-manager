async function TasksFetch(callback) {
  const data = await fetch("http://localhost:3000/task");
  const response = await data.json();
  callback(response);
}
export default TasksFetch;
