import React from "react";

const Navbar = (Props)=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary mb-5 p-4">
                <div className="container">
                    <h4 className="text-dark">BUSCADOR DE COLABORADORES</h4>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2"
                            type="text"
                            placeholder="Busca el colaborador"
                            onChange={(e)=>{
                                Props.setBuscar(e.target.value);
                            }}
                        />
                    </form>
                </div>
            </nav>
        </>
        )
}

export default Navbar;