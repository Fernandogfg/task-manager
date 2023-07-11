import { Link, useParams } from "react-router-dom";
import fetchBuscaTarefa from "../../utils/fetchBuscaTask";
import { useEffect, useState } from "react";
import atualizaTask from "../../utils/atualizaTask";
const PageEditar = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    buscaDados();
  }, []);

  async function buscaDados() {
    const response = await fetchBuscaTarefa(id);
    const data = await response;
    setData(data);
  }
  function options() {
    if (data.status === "LISTADA") {
      return (
        <>
          <option value="LISTADA">Listada</option>
          <option value="INICIADA">Iniciada</option>
          <option value="FINALIZADA">Finalizada</option>
        </>
      );
    }else if (data.status === "INICIADA") {
        return (
          <>
            <option value="INICIADA">Iniciada</option>
            <option value="LISTADA">Listada</option>
            <option value="FINALIZADA">Finalizada</option>
          </>
        );
      }else if (data.status === "FINALIZADA") {
        return (
          <>
            <option value="FINALIZADA">Finalizada</option>
            <option value="LISTADA">Listada</option>
            <option value="INICIADA">Iniciada</option>
          </>
        );
      }
  }
  return (
    <div id="formEditar">
      <label htmlFor="nome">
        Nome
        <input type="text" defaultValue={data.name} id="nomeEditar" />
      </label>
      <label>
        Status
        <select id="statusEditar">
            {options()}
        </select>
      </label>
      <label>
        Descrição
        <textarea
          className="descricao"
          defaultValue={data.description}
          id="descricaoEditar"
        ></textarea>
      </label>
      <div className="contBtn">
        <Link to="/">
          <button className="cancelar">Cancelar</button>
        </Link>
        <Link to="/">
          <button className="salvar" onClick={() => {
            const taskData = {
              name: document.getElementById('nomeEditar').value,
              status: document.getElementById('statusEditar').value,
              description: document.getElementById('descricaoEditar').value
            }
            atualizaTask(id,taskData)
          }}>
            Salvar
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PageEditar;
