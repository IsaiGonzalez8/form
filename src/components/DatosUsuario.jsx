import '../assets/style/DatosUsuario.css'
import InputC from '../assets/Atomos/InputC'
import Titulo from '../assets/Atomos/Titulo';

function DatosUsuario(){
    return(
        <>
            <div className="container2">
            <Titulo title={"Información personal"}></Titulo>   
            <div className="names">
            <InputC clase={"inputname"} type={"text"} text={"Nombre(s)"}></InputC>
            </div>            
            <div className="apellido">
            <InputC clase={"ape"} type={"text"} text={"Apellido paterno"}></InputC>
            <InputC clase={"ape"} type={"text"} text={"Apellido Materno"}></InputC>
            </div>
            <div className='inp'>
            <InputC clase={"inputname"} type={"email"} text={"E-mail"}></InputC>
            </div>
            <div className="inp">
            <InputC clase={"inputname"} type={"number"} text={"Telefono"}></InputC>
            </div>
            <div className='inp'>
            <InputC clase={"inputname"} type={"date"} val={"2022-09-30"}></InputC>
            </div>
            </div>
        </>
    )
}
export default DatosUsuario;    