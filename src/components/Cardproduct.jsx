import { Link } from "react-router-dom"
import { formatCurrency } from "../utils/utils"
import PropTypes from "prop-types";



const Cardproduct = ({item}) => {
   


    Cardproduct.propTypes = {
        item: PropTypes.shape({
          id: PropTypes.number.isRequired, 
          thumbnail: PropTypes.string.isRequired, 
          title: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          brand: PropTypes.string.isRequired, 
          rating: PropTypes.number.isRequired, 
          price: PropTypes.number.isRequired, 
        }).isRequired,
      };
  return (
    <div  className="col-lg-3 col-md-6 col-12 mb-3">
        <div className="single-product h-100 card">
           
                <div className="product-image ">
                    <img src={item.thumbnail} alt="#" />
                    <div className="button">
                        <Link to={`/detalle/${item.id}`} href="#" className="btn"><i className="lni lni-cart" /> Add to Cart</Link>
                    </div>
                </div>
            
            <div className="product-info">
                <span className="category">{item.category}</span>
               
                <h4 className="title">
                    <a href="product-grids.html">{item.title}</a>
                </h4>
                <span className="category">{item.brand}</span>
                <ul className="review">
                {[...Array(Math.floor(item.rating))].map((_, index) => (
                    <li key={`full-${index}`}><i className="lni lni-star-filled" /></li>
                ))}
                {[...Array(6 - Math.ceil(item.rating))].map((_, index) => (
                    <li key={`empty-${index}`}><i className="lni lni-star" /></li>
                ))}
                <li><span>{Math.floor(item.rating)}</span></li>
                </ul>
                <div className="price text-center">
                    <span className="text-danger">${formatCurrency(item.price)}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cardproduct