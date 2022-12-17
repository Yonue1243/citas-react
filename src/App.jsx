import Header from './components/Header'
import { Formulario } from './components/Formulario'
import { Listadopaciente } from './components/Listadopaciente'
import {useState,useEffect} from 'react';
function App() {
  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] =useState({});
  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
}, [pacientes])



  return (
    <div className='container mt-20 mx-auto '>
    <Header 
    />
    <div className='mt-12 md:flex'>
    <Formulario 
    setPacientes={setPacientes}
    pacientes={pacientes}
    paciente={paciente}
    setPaciente={setPaciente}
    
    />
    <Listadopaciente
    
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
    
    />
    </div>

    </div>
  )
}

export default App
