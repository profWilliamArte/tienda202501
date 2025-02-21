import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../utils/utils";
import Similares from "../components/Similares";
const API='https://dummyjson.com/products/';
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";
const Detalle = () => {
     const { agregar } = useContext(carritoContext);
     const params = useParams();
        const [datos, setDatos] = useState([])
        const [cantidad, setCantidad] = useState(1)
        const URI=API+params.id
        const [currentImage, setCurrentImage] = useState(""); // Estado para la imagen actual
        const [categoria, setCategoria] = useState([])
        const getDatos = async () =>{
            try {
              const response = await fetch(URI);
              const data = await response.json();
              //console.log(data)
              setDatos(data);
              setCategoria(data.category);
              setCurrentImage(data.thumbnail);
            } catch (error) {
              console.error(error)
            }
          };
          useEffect(()=>{
            getDatos();
          },[params.id]);
  return (
   
    <div>
    <div className="breadcrumbs">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
            <div className="breadcrumbs-content">
                <h1 className="page-title">Single Product</h1>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <ul className="breadcrumb-nav">
                <li><Link to="/" href="#"><i className="lni lni-home" /> Home</Link></li>
                <li><Link to={`/productos/${categoria}`} href="index.html">Shop</Link></li>
                <li>Single Product</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    {/* End Breadcrumbs */}
    {/* Start Item Details */}
    <section className="item-details section">
        <div className="container">
        {datos && (
            <>
            <div className="top-area">
                <div className="row align-items-center">
                <div className="col-md-4 ">
                    <div className="product-images">
                    <main id="gallery">
                        <div className="main-img">
                            <img src={currentImage} id="current" alt="Producto Principal" className="img-fluid"  />
                        </div>
                       
                        <div className="images">
                        {datos.images &&
                            datos.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                className="img"
                                alt={`Product ${index + 1}`}
                                style={{ maxWidth: '50px', cursor: 'pointer' }}
                                onClick={() => setCurrentImage(image)} // Cambiar la imagen al hacer clic
                              />
                            ))}
                        </div>
                    </main>
                    </div>
                </div>

                <div className="col-md-8 ">
                
                    <div className="product-info">
                    <p>{datos.sku}</p>
                    <h2 className="title">{datos.title}</h2>
                    <h5 className="category"><i className="lni lni-tag" />{datos.category} </h5>
                    <p>Marca: {datos.brand}</p>
                    <p>Stock: {datos.stock}</p>
                    <p>{datos.warrantyInformation}</p>       
                    <p className="info-text">{datos.description}</p>
                    
                   
                    <ul className="review fs-3">
                        {datos.rating && (
                            <div className="d-flex text-warning">
                                <span> <strong>Rating : </strong></span>
                                {[...Array(Math.floor(datos.rating))].map((_, index) => (
                                    <li key={`full-${index}`}><i className="lni lni-star-filled" /></li>
                                ))}
                                {[...Array(5 - Math.ceil(datos.rating))].map((_, index) => (
                                    <li key={`empty-${index}`}><i className="lni lni-star" /></li>
                                ))}
                            </div>
                        )}
                        </ul>
                        <div className="price py-4">
                            <h3 className="price text-danger fw-bold">${formatCurrency(datos.price-(datos.discountPercentage*datos.price)/100)}<span>${formatCurrency(datos.price)}</span></h3>
                        </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group color-option">
                            <label className="title-label" htmlFor="size">Choose color</label>
                            <div className="single-checkbox checkbox-style-1">
                            <input type="checkbox" id="checkbox-1" defaultChecked />
                            <label htmlFor="checkbox-1"><span /></label>
                            </div>
                            <div className="single-checkbox checkbox-style-2">
                            <input type="checkbox" id="checkbox-2" />
                            <label htmlFor="checkbox-2"><span /></label>
                            </div>
                            <div className="single-checkbox checkbox-style-3">
                            <input type="checkbox" id="checkbox-3" />
                            <label htmlFor="checkbox-3"><span /></label>
                            </div>
                            <div className="single-checkbox checkbox-style-4">
                            <input type="checkbox" id="checkbox-4" />
                            <label htmlFor="checkbox-4"><span /></label>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                            <label htmlFor="color">Battery capacity</label>
                            <select className="form-control" id="color">
                                <option>5100 mAh</option>
                                <option>6200 mAh</option>
                                <option>8000 mAh</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group quantity">
                            <label htmlFor="color">Quantity</label>
                            <select className="form-control" value={cantidad}  onChange={(e) => setCantidad(Number(e.target.value))}>
                            {Array.from({ length: datos.stock }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                {i + 1}
                                </option>
                            ))}
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="row align-items-end">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="button cart-button">
                                <button className="btn" style={{width: '100%'}} onClick={()=>agregar(datos, cantidad)}>Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="wish-button">
                            <button className="btn"><i className="lni lni-reload" /> Compare</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="wish-button">
                            <button className="btn"><i className="lni lni-heart" /> To Wishlist</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

                <div className="product-details-info">
                  <div className="single-block row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h5 className="mb-4">Reseñas del Producto</h5>
                        {datos.reviews && datos.reviews.length > 0 ? (
                        <div className="review-list">
                            {datos.reviews.map((review, index) => (
                            <div key={index} className="review-item mb-4">
                                <div className="review-header ">
                                <h5>{review.reviewerName}</h5>
                                <span className="text-muted">
                                    {new Date(review.date).toLocaleDateString('es-ES')}
                                </span>
                                </div>
                                <div className="review-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="lni lni-star-filled text-warning" />
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                    <i key={i} className="lni lni-star text-muted" />
                                ))}
                                </div>
                                <p className="review-comment mt-2">{review.comment}</p>
                            </div>
                            ))}
                        </div>
                        ) : (
                        <p>No hay reseñas disponibles para este producto.</p>
                        )}
                    </div>
                    <div className="col-lg-8 col-md-6 col-12">
                        <Similares  categoria={datos.category}/>

                    </div>  
                  </div>
                </div>


            </div>
          
        </>
        )}
        </div>
    </section>
    </div>

  
  )
}

export default Detalle