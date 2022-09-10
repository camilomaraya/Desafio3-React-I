import { useState } from "react";
import { BaseColaboradores } from "../baseColaboradores";
import { nanoid } from "nanoid";
import '../index.css'

const Colaboradores = (Props)=> {
    const[nombreColab, setNombreColab] = useState("");
    const[emailColab, setEmailColab] = useState("");
    const [listaColab,setListaColab] = useState(BaseColaboradores);

    const addColaborador = (e) =>{
        e.preventDefault();
        if (!nombreColab || !emailColab){
            alert("Ingresa los datos");
        }else{
        setListaColab([
            ...listaColab,
            { id: nanoid(), nombre:nombreColab,email:emailColab}]);
    };
 };
    return (
        <>
            <div className="container">
            <form onSubmit={addColaborador}>
                    <input 
                        placeholder="Ingresa nombre"
                        className="form-control my-3"
                        onChange={(e)=>setNombreColab(e.target.value)} 
                    />            
                    <input 
                        placeholder="Ingresa email" 
                        className="form-control"
                        onChange={(e)=>setEmailColab(e.target.value)} 
                    />
                    <input 
                        type="submit"
                        value="Agregar"
                        className="btn btn-success my-4"
                    />
            </form>
            </div>
            <hr />
            <div className="container">
                <h1>Listado de Colaboradores</h1>
                {listaColab.filter ((ele) => {
                    if (Props.buscar === ""){
                        return "ele";
                    } else if (
                      ele.nombre
                        .toLocaleLowerCase()
                        .includes(Props.buscar.toLocaleLowerCase())
                    ){
                      return ele;
                    }        
                } ).map((ele) =>(
                    <div key={ele.id}>
                        <p> 
                          {ele.nombre} - {ele.email}    
                        </p>
                    </div>
                    ))}
            </div>
        </>      
    );
};

export default Colaboradores;

