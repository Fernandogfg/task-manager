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

  return (
    <>
      <section className="taskContainer">
        Listadas
        <Link to='/cadastrar'>
          <img src={Add} />
        </Link>
        {tasksListada.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
      <section className="taskContainer">
        Iniciadas
        <Link>
          <img src={Add} />
        </Link>
        {tasksIniciada.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
      <section className="taskContainer">
        Finalizadas
        <Link>
          <img src={Add} />
        </Link>
        {tasksFinalizadas.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
    </>
  );
}
export default TaskContainer;
