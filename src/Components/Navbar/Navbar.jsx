import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <div className="logoDiv">
                <img src="" alt="" className="logo" />
            </div>

            <div className="navbar">
                <ul className="menu">
                    <li className="listItem">
                        <a href="/" className="link">Carros Usados</a>
                    </li>
                    <li className="listItem">
                        <a href="/" className="link">Carros Novos</a>
                    </li>
                    <li className="listItem">
                        <a href="/" className="link">Leilões</a>
                    </li>
                    <li className="listItem">
                        <a href="/" className="link">Vender</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar