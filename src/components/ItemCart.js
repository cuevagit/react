import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom';
import { useContext } from "react"
import CartContext from './context/CartContext';
import { RiDeleteBin5Line } from "react-icons/ri";

//Card del Carrito
const ItemCarrito = ( {codigo, slug, marca, tipo, precio, estado, stock, cantidad, img} ) => {

    const {removeItem} = useContext(CartContext)
    const total = precio * cantidad    
    const disponible = stock - cantidad

    return (
   <>      
        <div className="card w-96 bg-base-100 shadow-xl px-6 py-6"> 
          <strong>{tipo}</strong>
          <img className= "imagen" src={img} alt="Imagen producto"/>
          <h6>Marca: {marca} </h6>
          <h6>Disponible: {disponible} </h6>
          <h6>Estado: {estado}</h6>
          <h6>Precio Unitario: $ {precio}</h6>
          <h6>Cantidad: {cantidad}</h6>
          <h6>Precio Total: $ {total} </h6>
          <br></br>
          <Link to={'/item/' + slug}>
          <Button>Ver Detalle</Button>
          </Link>
          <br></br>
          <br></br>
          <Button onClick={() => {  removeItem(codigo) }}><RiDeleteBin5Line/></Button>   
          <div></div>       
          <br></br>
      </div>
  </>

    )
  }

  export default ItemCarrito