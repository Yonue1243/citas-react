import { useEffect,useState } from "react";

function BodyContainer(setPaciente,paciente,setPacientes,pacientes) {
    const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    const[pacientes, setPacientes]=useState(INITIAL);
    const[paciente, setPaciente] = useState({});
    useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])

    return (
    <div className='mt-12 md:flex'>
    <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente}/>
    <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
    </div>
    )
}

export default BodyContainer