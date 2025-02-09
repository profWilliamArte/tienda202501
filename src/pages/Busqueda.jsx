import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import { useLocation } from 'react-router-dom';
import Cardproduct from "../components/Cardproduct";

const Busqueda = () => {
    const location = useLocation();
    const txtBuscar = location.state;
    
    const [datos, setDatos] = useState([])
    const getDatos = async (valueSearch) =>{
        try {
        const URI=API+valueSearch;
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
    };
    useEffect(()=>{
      getDatos(txtBuscar);
    },[txtBuscar]);
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title">
                    <h2>Buscando... {txtBuscar } ({datos.length})</h2>
                    <p>Conoce nuestras mejores opciones, diseñadas especialmente para ti</p>
                </div>
            </div>
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

export default Busqueda