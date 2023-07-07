import { Link } from "react-router-dom";

function AddTask() {
  return (
    <div id="formCadastrar">
      <label htmlFor="nome">
        Nome
        <input type="text" id="nome" />
      </label>
      <label htmlFor="status">
        Status{" "}
        <select id="">
          <option value=""></option>
          <option value="LISTADA">Listada</option>
          <option value="INICIADA">Iniciada</option>
          <option value="FINALIZADA">Finalizada</option>
        </select>
      </label>
      <label>
        Descrição
        <textarea className="descricao"></textarea>
      </label>
      <div className="contBtn">
        <Link to="/">
          <button className="cancelar">Cancelar</button>
        </Link>
        <Link to="/">
          <button className="salvar">Adicionar</button>
        </Link>
      </div>
    </div>
  );
}
export default AddTask;
