import { useState } from "react";
import TasksFetch from "../../utils/tasksFetch";
import { useEffect } from "react";
import Task from "../task";

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
        {tasksListada.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
      <section className="taskContainer">
        Iniciadas{" "}
        {tasksIniciada.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
      <section className="taskContainer">
        Finalizadas{" "}
        {tasksFinalizadas.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </section>
    </>
  );
}
export default TaskContainer;
