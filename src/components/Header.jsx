import logo from '../assets/imgs/obencabs.svg';
import '../assets/styles/header.css';

function Header() {
    return (
        <header>
            <img src={logo}/>
            <h1>Servicios integrales Cupapé</h1>
        </header>
      );
}

export default Header;