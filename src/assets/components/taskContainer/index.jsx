import { useState } from "react";
import TasksFetch from "../../utils/tasksFetch";
import { useEffect } from "react";
import Task from "../task";
import { Link } from "react-router-dom";
import Add from "../../images/add.svg";
function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const tasksFinalizadas = tasks.filter((task) => task.status === "FINALIZADA");
  const tasksListada = tasks.filter((task) => task.status === "LISTADA");
  const tasksIniciada = tasks.filter((task) => task.status === "INICIADA");
  useEffect(() => {
    TasksFetch((data) => {
      setTasks(data);
    });
  }, []);
  const updateTasks = () => {
    TasksFetch((data) => {
      setTasks(data);
    });}
  return (
    <>
      <section className="taskSection">
        <p className="taskHeader">Listadas</p>
        <Link to='/cadastrar'  className="taskHeader">
          <img src={Add} />
        </Link>
        {tasksListada.map((task) => (
          <Task key={task.id} {...task} updateTasks = {updateTasks}/>
        ))}
      </section>
      <section className="taskSection">
        <p  className="taskHeader">Iniciadas</p>
        <Link to='/cadastrar'  className="taskHeader">
          <img src={Add} />
        </Link>
        {tasksIniciada.map((task) => (
          <Task key={task.id} {...task}  updateTasks = {updateTasks}/>
        ))}
      </section>
      <section className="taskSection">
        <p  className="taskHeader">Finalizadas</p>
        <Link to='/cadastrar'  className="taskHeader">
          <img src={Add} />
        </Link>
        {tasksFinalizadas.map((task) => (
          <Task key={task.id} {...task}  updateTasks = {updateTasks}/>
        ))}
      </section>
    </>
  );
}
export default TaskContainer;