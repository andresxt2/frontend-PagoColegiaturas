
import { Link } from 'react-router-dom';
import "./Header.css";
import { Outlet } from 'react-router-dom';

const links = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Secciones',
    url: '/secciones'
  }
]


const Header = () => {
  return (
    <>
    <header className='mb-5'>
      <nav className="navbar navbar-expand-md bg-black fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://andrestayupanta.neocities.org/imagesMvc/images.jpg" alt="Logo" className="logo" /> </a>
          <a className="navbar-brand" href="cart.html">
            <img src="https://andrestayupanta.neocities.org/proyecto/imagenes/icons8-carrito-de-compras-64.png" alt="carrito" className="carrito" />
            <span className="counter" id="nro-productos">0</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas bg-black offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bullworth</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-black">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 mt-2" style={{ fontFamily: "'Cambria', sans-serif" }}>
      
              {links.map((link) => (
                  <li key={link.title} className="nav-item links">
                    <Link className="nav-link" to={link.url}>{link.title}</Link>
                  </li>
                ))}
                            
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

        <Outlet/>
</>
);
};

export default Header;

//create a function that  will be called when the header is clicked

