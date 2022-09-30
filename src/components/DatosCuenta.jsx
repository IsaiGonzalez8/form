import '../assets/style/DatosCuenta.css'
import Titulo from '../assets/Atomos/Titulo'
import InputC from '../assets/Atomos/InputC';
import BtnRegistrar from '../assets/Atomos/BtnRegistrar';

function DatosCuenta(){
    return(
        <>
        <div className="container">
            <div className='titulo'>
            <Titulo title={"Informacion de la cuenta"}></Titulo>
            </div>
            <div className='inputs'>
            <InputC clase={"nombreU"} type={"text"} text={"Nombre del Usuario"}></InputC>  
            </div>
            <div className="contras">
            <InputC clase={"contra"} type={"password"} text={"Contraseña"}></InputC>
            <InputC clase={"contra"} type={"password"} text={"Confirmar contraseña"}></InputC>
            </div>
            <div className="condiciones">
            <InputC clase={"terminos"} type={"checkbox"}></InputC>
            <p>Acepto los terminos y condicones</p>
            </div>
            <div className='btnRegistrar'>
            <BtnRegistrar></BtnRegistrar>
            </div>
            
        </div>
        </>
    )
}
export default DatosCuenta;