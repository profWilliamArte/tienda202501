
// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";
import { formatCurrency, formatNumber } from "../utils/utils";
import { Link } from "react-router-dom";
const VerCompra = () => {
    const {cart, eliminar, limpiar} = useContext(carritoContext);
    const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Ver lista de compras</h2>
                           
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center py-3">
                    <a href="#" className="btn btn-info btn-sm" onClick={limpiar}>Limpiar</a>
                </div>
                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                    {cart && cart.map((item) => (
                        <tr key={item.id}>
                            <td className="text-center">{item.id}</td>
                            <td className="text-center"><img src={item.thumbnail} alt="" className="img-fluid" style={{width: '50px'}} /></td>
                            <td><Link to={`/detalle/${item.id}`} href="#">{item.title}</Link></td>
                            <td className="text-end">{item.price}</td>
                            <td className="text-center">{item.cantidad}</td>
                            <td className="text-end">{formatCurrency(item.price * item.cantidad)}</td>
                            <td className="text-center"><a href="#" className="btn btn-danger btn-sm" onClick={() => eliminar(item.id)}>Eliminar</a></td>
                        </tr>
                    ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="4" className="text-end">Total</th>
                                <th className="text-center">{formatNumber(totalCantidad)}</th>
                                <th className="text-end">{formatCurrency(total)}</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </section>
  )
}

export default VerCompra