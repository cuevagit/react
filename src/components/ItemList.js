import Item from './Item'
//import { Link } from 'react-router-dom';

/*<Link to={'/productos/' + p.codigo}>
</Link>*/

const ItemList = ( {prods}) => {
    return (
      
      <div className="producto">
        
        { prods.length ? (prods.map( p =>
        
          <Item key={p.codigo} codigo={p.codigo} slug={p.slug} marca={p.marca} 
          tipo={p.tipo} precio={p.precio} estado={p.estado}  stock={p.stock} img={p.img}/>
        
          )) : (  <p className="mensaje"> <h1>Loading...</h1></p>)  
        }
      </div>
    )
  }
  
  export default ItemList