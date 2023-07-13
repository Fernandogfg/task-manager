import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();//busca o endereço atual
  const pathnames = location.pathname.split('/').filter((path) => path !== '');//separa o enderço em um array e exclui to primeiro ja que a home é /

  return (
    <nav>
      <div className="breadcrumb">
        <a>
          <Link to="/">Home</Link>
        </a>
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;//junta o primeiro com o próximo usando uma barra "/" e armazena a string atual

          return (//já que o primeiro vai ser sempre Home como está acima, inserimos a variavel routeTo detro de um link
            <a key={path}>
               /<Link to={routeTo}>{path}</Link> 
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Breadcrumb;