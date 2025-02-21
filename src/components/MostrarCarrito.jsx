

// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";
import { formatCurrency } from "../utils/utils";
import { Link } from "react-router-dom";
const MostrarCarrito = () => {


    const {cart, eliminar} = useContext(carritoContext);
    console.log(cart)
    const total = cart.reduce((acc, item)=>acc+item.price*item.cantidad, 0);
  return (
    <div className="cart-items">
    <a href="javascript:void(0)" className="main-btn">
      <i className="lni lni-cart" />
      <span className="total-items">{cart.length}</span>
    </a>
    {/* Shopping Item */}
    <div className="shopping-item">
      <div className="dropdown-cart-header">
        <span>{cart.length} Items</span>
        <Link to="/vercompras" href="#">View Cart</Link>
      </div>
      <ul className="shopping-list">
       {cart.map(item=>(

        <li key={item.id}>
          <a href="javascript:void(0)" className="remove" title="Remove this item" onClick={()=>eliminar(item.id)}>
            <i className="lni lni-close" />
          </a>
          <div className="cart-img-head">
            <a className="cart-img" href="product-details.html">
                <img src={item.thumbnail} alt="#" />
            </a>
          </div>
          <div className="content">
            <h4>
                <Link to={`/detalle/${item.id}`} href="#">{item.title}</Link>
            </h4>
            <p className="quantity">{item.cantidad} x - <span className="amount">${formatCurrency(item.price)}</span></p>
            <p className="fw-bold"><span className="amount">${formatCurrency(item.price*item.cantidad)}</span></p>
          </div>
        </li>
        ))}
      </ul>
      <div className="bottom">
        <div className="total">
          <span>Total</span>
          <span className="total-amount">${formatCurrency(total)}</span>
        </div>
        <div className="button">
          <a href="checkout.html" className="btn animate">Checkout</a>
        </div>
      </div>
    </div>
    {/*/ End Shopping Item */}
  </div>
  )
}

export default MostrarCarrito