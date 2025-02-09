

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const API='https://dummyjson.com/products/category/';

const Similares = ({categoria}) => {
    //const params = useParams();
    const [datos, setDatos] = useState([])
    const URI=API+categoria+'?limit=8'
    const getDatos = async () =>{
        try {
          const response = await fetch(URI);
          const data = await response.json();
          console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[categoria]);
    return (
       
                <div className="row">
                    <h5 className="text-center pb-4"> Productos Similares {categoria}</h5>
                    <div className="d-flex flex-wrap">
                    {datos && datos.map((item) => (

                        <div key={item.id} className="text-center bg-light p-4 m-2 border" >
                            <Link to={`/detalle/${item.id}`} className="btn">
                                <img src={item.thumbnail} alt="" className="imf-fluid" width="100px" />
                                <p>{item.brand}</p>
                            </Link>
                            
                        </div>
                    ))}
                    </div>
                </div>
           

    )
}

export default Similares