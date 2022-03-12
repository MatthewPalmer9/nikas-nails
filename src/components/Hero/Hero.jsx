import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <Navbar />
            <div className="hero-container">
                <h1>Welcome to a new way of doing nails</h1>
                <p>Life isn't perfect, but your nails can be.</p>
                <button>Book an Appointment</button>
            </div>
        </section>
    )
}
