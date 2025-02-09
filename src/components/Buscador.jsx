import { Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom';
import { useState } from "react";

const Buscador = () => {
    const [txtbuscar, setTxtbuscar] = useState('');
    const menejoTxt = (event) => {
        setTxtbuscar(event.target.value);
    };
    const manejoEnvio = (event) => {
        //alert(`Buscando ${txtbuscar}`);
        event.preventDefault();
        navigate('/busquedas', {
          state: txtbuscar,
        });	
        
      };
const navigate = useNavigate();
  return (
        <form className="d-flex" role="search" onSubmit={manejoEnvio}>
           

            <div className="search-input">
                <input type="text" value={txtbuscar} onChange={menejoTxt} placeholder="Search" />
              </div>
              <div className="search-btn">
                <button><i className="lni lni-search-alt" /></button>
              </div>

        </form>
  )
}
// Validación de PropTypes

  
export default Buscador