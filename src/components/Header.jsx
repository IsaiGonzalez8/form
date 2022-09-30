import Logo from '../assets/Atomos/Logo';
import Nav from '../assets/Atomos/Nav'
import '../assets/style/header.css'
import DatosCuenta from '../components/DatosCuenta'
import DatosUsuario from './DatosUsuario';

function Header() {
  return (
    <>
    <header className='header'>
    <Logo></Logo>
    <Nav></Nav>
    <DatosCuenta></DatosCuenta>
    <DatosUsuario></DatosUsuario>
    </header>
    </>    
  );
}
export default Header;
