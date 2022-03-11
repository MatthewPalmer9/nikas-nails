import React from 'react';
import './Navbar.css';

export default function Navbar() {

    const toggleMenu = () => {
        const menuLines = document.querySelectorAll(".menu-line");
        menuLines.forEach((line) => {
            line.classList.toggle("active");
        });

        // menuLineOne.style.transform = "translate(0, 1.2rem) rotate(45deg)";

        // // handle second menu bar
        // menuLineTwo.style.transform = "translateX(-100%)";
        // menuLineTwo.style.backgroundColor = "transparent";

        // menuLineThree.style.transform = "translate(0, -1.2rem) rotate(-45deg)";
    }

    return (
        <div className="navbar-container">
            <div className="temp"></div>
            <div onClick={toggleMenu} className="menu-container">
                <div className="menu-line one"></div>
                <div className="menu-line two"></div>
                <div className="menu-line three"></div>
            </div>
        </div>
    )
}
