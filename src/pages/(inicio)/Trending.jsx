

import { useEffect, useState } from "react";
import Cardproduct from "../../components/Cardproduct";
const API='https://dummyjson.com/products?limit=16';
const Trending = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
    return (
        <section className="trending-product section" style={{ marginTop: 12 }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Productos Destacados </h2>
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

export default Trending