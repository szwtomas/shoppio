import React from "react";

const Navbar = () => {

    return (
        <nav className="navbar">
            <i className="fas fa-shopping-bag navbar--icon"></i>
            <h2 className="navbar--title">
                Shoppio
            </h2>
            <div className="link-wrapper">
                <span className="inner-wrapper navbar--category">
                    <button className="link hover-effect">Notebooks</button>
                </span>
            </div>
            <div className="link-wrapper">
                <span className="inner-wrapper navbar--category">
                    <button className="link hover-effect">Celulares</button>
                </span>
            </div>
            <div className="link-wrapper">
                <span className="inner-wrapper navbar--category">
                    <button className="link hover-effect">Televisores</button>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;