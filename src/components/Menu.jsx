
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/categories';

const Menu = () => {
    const [datos, setDatos] = useState([])
        const getDatos = async () =>{
            try {
              const response = await fetch(API);
              const data = await response.json();
              setDatos(data);
            } catch (error) {
              console.error(error)
            }
          };
          useEffect(()=>{
            getDatos();
          },[]);
  return (
   <>
      {datos && datos.map((item, index) => (
            <li key={index}><Link to={`/productos/${item.slug}`} href="product-grids.html">{item.name}</Link></li>
      ))}
   </>
  )
}

export default Menu