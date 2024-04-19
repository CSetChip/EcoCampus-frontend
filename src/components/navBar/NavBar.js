import React from 'react';
import NavbarItem from './NavBarItem';

function NavBar(props){
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">EcoCampus</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavbarItem href= "/manegerStudent" label="Alunos"/>
                        <NavbarItem href= "bicycleHome" label="Bicicletas"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;