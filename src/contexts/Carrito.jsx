import { useState } from "react";
import { carritoContext } from "./carritoContext"

const Carrito = ({children}) => {
    const [cart, setCart] = useState([]);
    const agregar=(producto, cantidad)=>{
        // console.log('Agregado al carrito', producto.title)
        // alert('Agregado al carrito '+producto.title)
        // setCart([...cart, producto])
        // console.log(cart)
        //console.log(cantidad)
      
      
        const existe = cart.find(item=>item.id===producto.id);
        if(existe){
            setCart(cart.map(item=>item.id===producto.id ? {...item, cantidad: cantidad} : item));
        }else{
            setCart([...cart, {...producto, cantidad: cantidad}]);
        }  

    }
    const eliminar = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
            setCart(cart.filter(item => item.id !== id));
        }
    }
    const limpiar=()=>{
        if (window.confirm('¿Estás seguro de que deseas limpiar el carrito?')) {
            setCart([]);
        }
    }

    const comprar=()=>{

    }

  return (
    <carritoContext.Provider 
        value={{cart, agregar, eliminar, limpiar, comprar}}>
        {children}
    </carritoContext.Provider>
  )
}

export default Carrito