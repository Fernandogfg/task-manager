import edit from "../../images/edit.svg";
import { useRef, useState } from "react";
import trocaStatus from "../../utils/trocaStatus";
import fetchDeletaTask from "../../utils/fetchDeletaTask";
import { Link } from "react-router-dom";

function Task(props) {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const handleToggleOptions = () => {
    setOptionsOpen(!isOptionsOpen);
  };
  const updatePage = async (status) => {
    await trocaStatus(props.id, status);
    handleToggleOptions();
    props.updateTasks();
  };
  const deletaTask = async (id) => {
    await fetchDeletaTask(id);
    props.updateTasks();
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
        <p className="taskName">{props.name}</p>
        <img
          src={edit}
          alt="editar"
          title="editar"
          onClick={handleToggleOptions}
        />
        {isOptionsOpen && (
          <div className="taskOptions" ref={elementRef}>
            <Link to={`/editar/${props.id}`}>
              <button>Editar</button>
            </Link>
            <button
              onClick={() => {
                deletaTask(props.id);
              }}
            >
              Deletar
            </button>

            <ReturnOptions />
          </div>
        )}
      </div>
      <p className="description">
        {props.description.substring(0, 60)}
        {}
      </p>
    </div>
  );
}
export default Task;
