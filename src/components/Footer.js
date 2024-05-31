import React from 'react';
import logoimg from '../images/logo.png'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{backgroundColor: "rgb(9 10 10)"}}>
        <div className="container text-center">
        <img src={logoimg} alt="Green Movies" className="img-fluid" style={{ maxWidth: '100px' }} />
            <p className="mb-0">&copy; 2024 Green Movies. All rights reserved.</p>
            <p className="mb-0">Designed with <i className="fas fa-heart text-success"></i> by You</p>
        </div>
        <div className='social-icons'>
            <Link className='instagram' to="/">
                <i className='fa-brands fa-instagram'></i>
            </Link>
            <Link className='tiktok' to="/">
                <i className='fa-brands fa-tiktok'></i>
            </Link>
            <Link className='facebook' to="/">
                <i className='fa-brands fa-facebook-f'></i>
            </Link>
        </div>
    </footer>
  );
}

export default Footer;
