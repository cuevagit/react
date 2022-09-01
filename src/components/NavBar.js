import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logocazasinfondo.png';

//import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    
  return (
    
    <main>  


    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-expand-lg navbar-light">

                    <ul><img src={logo} className="App-logo" alt="logo" /></ul>
                    <ul>Armeria "La Liebre"</ul>
                    <ul><a className="dropdown-item" href="http://localhost:3000">Inicio</a></ul>
                    <ul><a className="dropdown-item" href="http://localhost:3000">Productos</a></ul>
                    <ul><a className="dropdown-item" href="http://localhost:3000">Ofertas</a></ul>
                    <ul><a className="dropdown-item" href="http://localhost:3000">Nosotros</a></ul>
                    <ul><a className="dropdown-item" href="http://localhost:3000">Contacto</a></ul>
                    <ul><CartWidget/></ul>
              </nav>

        <form className="d-flex">
        </form>
    </div>
  

</main>
    
  )
}
export default NavBar
