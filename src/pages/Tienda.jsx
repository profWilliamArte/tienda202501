
import { useEffect, useState } from "react";
import Cardproduct from "../components/Cardproduct";
const API='https://dummyjson.com/products';
const Tienda = () => {
  const [datos, setDatos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(12);
  const [total , setTotal] = useState(0);

  const getDatos = async () => {
    try {

      //?limit=12&skip=
      const URI = `${API}?limit=${limit}&skip=${skip}`;
      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
      setTotal(data.total)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
     getDatos();
  }, [skip]);
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Tienda </h2>
                             <h3 className="lead" >Pagina {Math.floor(skip / limit) + 1} de {Math.ceil(total / limit)}</h3>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                
                    <ul className="d-flex pagination">
                      <li className={`page-item  ${skip === 0 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={() => setSkip(skip - limit)}>Anterior</a>
                      </li>
                    
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" >{Math.floor(skip / limit) + 1}</a>
                      </li>
                     
                      <li className={`page-item ${skip + limit >= total ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={() => setSkip(skip + limit)}>Siguiemte</a>
                      </li>
                    </ul>
                

                </div>




        
        <div className="row">
          {datos && datos.map((item) => (
            <Cardproduct key={item.id} item={item} />
          ))}
        </div>
            </div>
        </section>
  )
}

export default Tienda