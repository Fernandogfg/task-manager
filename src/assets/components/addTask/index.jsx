import { Link } from "react-router-dom";
import taskAddFetch from "../../utils/taskAddFetch";
import Breadcrumb from "../breadCrumb";
import Logo from '../logo'
function AddTask() {
  const haddleAdicionar = () => {
    const taskData = {
      name: document.getElementById("nome").value,
      status: document.getElementById("status").value,
      description: document.getElementById("descricaoAdd").value,
    };
    console.log(taskData);
    return taskData;
  };
  

  return (
    <div id="formCadastrar">
      <Logo/>
      <Breadcrumb />
      <label htmlFor="nome">
        Nome
        <input type="text" id="nome" />
      </label>
      <label>
        Status
        <select id="status">
          <option value=""></option>
          <option value="LISTADA">Listada</option>
          <option value="INICIADA">Iniciada</option>
          <option value="FINALIZADA">Finalizada</option>
        </select>
      </label>
      <label>
        Descrição
        <textarea className="descricao" id="descricaoAdd"></textarea>
      </label>
      <div className="contBtn">
        <Link to="/">
          <button className="cancelar">Cancelar</button>
        </Link>
        <Link to="/">
          <button
            className="salvar"
            onClick={() => {
              taskAddFetch(haddleAdicionar());
            }}
          >
            Adicionar
          </button>
        </Link>
      </div>
    </div>
  );
}
export default AddTask;
