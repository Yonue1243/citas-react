import  {Paciente}  from "./Paciente"

export const Listadopaciente = ({pacientes, setPaciente,eliminarPaciente}) => {




  return (



    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (<>
    <h2 className="font-black text-center">Listado pacientes</h2>
    <p className="text-xl mb-10 mt-5 text-center">
      Administra tus
      <span className="text-indigo-600 font-bold"> pacientes y citas</span>
    </p>

    {pacientes.map(paciente =>(

<Paciente 
    key={paciente.id}
    paciente={paciente}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
/>

    ) )}</>) : (<>    <h2 className="font-black text-center">No hay pacientes</h2>
    <p className="text-xl mb-10 mt-5 text-center">
      Comienza agregando pacientes y aparecerán
      <span className="text-indigo-600 font-bold"> aquí</span>
    </p></>)}

    </div>
  )
}
