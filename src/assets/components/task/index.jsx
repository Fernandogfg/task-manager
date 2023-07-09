import edit from "../../images/edit.svg";
import { useState } from "react";
import atualizaTask from "../../utils/atualizaTask";
import TaskContainer from "../taskContainer";
function Task(props) {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const handleToggleOptions = () => {
    setOptionsOpen(!isOptionsOpen);
  };
  const updatePage = (status) => {
    atualizaTask(props.id, status);
    setOptionsOpen(false);
    props.updateTasks()
  };
  const ReturnOptions = () => {
    if (props.status === "LISTADA") {
      return (
        <>
          <button
            onClick={() => {
              updatePage("INICIADA");
            }}
          >
            Iniciada
          </button>

          <button
            onClick={() => {
              updatePage("FINALIZADA");
            }}
          >
            Finalizada
          </button>
        </>
      );
    } else if (props.status === "INICIADA") {
      return (
        <>
          <button
            onClick={() => {
              updatePage("LISTADA");
            }}
          >
            Listada
          </button>

          <button
            onClick={() => {
              updatePage("FINALIZADA");
            }}
          >
            Finalizada
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              updatePage("LISTADA");
            }}
          >
            Listada
          </button>

          <button
            onClick={() => {
              updatePage("INICIADA");
            }}
          >
            Iniciada
          </button>
        </>
      );
    }
  };
  return (
    <div className="task">
      <div className="title">
        <p>{props.name}</p>
        <img
          src={edit}
          alt="editar"
          title="editar"
          onClick={handleToggleOptions}
        />
        {isOptionsOpen && (
          <div className="taskOptions">
            <button>editar</button>
            <ReturnOptions />
          </div>
        )}
      </div>
      <p>{props.description}</p>
    </div>
  );
}
export default Task;
