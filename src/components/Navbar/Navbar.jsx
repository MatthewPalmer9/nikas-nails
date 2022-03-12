import React from 'react';
import './Navbar.css';

export default function Navbar() {

    const toggleMenu = () => {
        const mainMenu = document.querySelector(".main-menu");
        const menuLines = document.querySelectorAll(".menu-line");
        const menuListItems = document.querySelectorAll(".list-item");

        mainMenu.classList.toggle("active");
        mainMenu.classList.toggle("inactive");

        menuLines.forEach((line) => {
            line.classList.toggle("active");
        });

        setTimeout(() => {
            menuListItems.forEach((li) => {
                li.classList.toggle("active");
            });
        }, 500);
    };

    return (
        <div className="navbar-container">
            <div className="main-menu inactive">
                <ul className="menu-list">
                    <li className="list-item">Home</li>
                    <li className="list-item">Gallery</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Location</li>
                    <li className="list-item">Book an Appointment</li>
                </ul>
            </div>
            <nav>
                <div className="brand">
                    Nikas Nails &amp; Lashes
                </div>
                <div onClick={toggleMenu} className="menu-container">
                    <div className="menu-line one"></div>
                    <div className="menu-line two"></div>
                    <div className="menu-line three"></div>
                </div>
            </nav>
        </div>
    )
}
