import React from 'react'
import "./Footer.css";

export default function Footer() {
    return (
        <>
           <footer className="text-white pt-4 pb-2 footer-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12 mb-3">
                        <img src="https://andrestayupanta.neocities.org/imagesMvc/images.jpg" alt="Bullworth College Logo" className="img-fluid mb-2" />
                        <p>Comprometidos con la formación de líderes y profesionales que marcarán la diferencia en el mundo.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 mb-3">
                        <h5 className="fw-bold">Contáctanos</h5>
                        <p>Av. 12 de Octubre y Roca, Quito, Ecuador</p> 
                        <p>+593 2 123 4567</p>
                        <p>secretaria@bullworth.edu.ec</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <h5 className="fw-bold">Facultades</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Facultad de Ciencias</a></li>
                            <li><a href="#" className="text-white">Facultad de Derecho</a></li>
                            <li><a href="#" className="text-white">Facultad de Ingeniería</a></li>
                            <li><a href="#" className="text-white">Facultad de Artes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
