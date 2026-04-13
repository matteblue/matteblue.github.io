import { NavLink } from 'react-router-dom'
import { House, Info, FolderCode } from 'lucide-react'
// import { useState } from 'react'

function Navbar() {

    const navLinkClass = ({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'
    const bottomLinkClass = ({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'
    return (
        <>
        {/* Top navbar — desktop only */}
            <nav className="navbar">
                <div className="navbar-inner">
                    <NavLink to="/" className="navbar-logo">Matteblue</NavLink>
                    <div className="navbar-links">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                        <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
                    </div>
                </div>
            </nav>

        {/* Bottom bar — mobile only */}
            <nav className="bottom-bar">
                <NavLink to="/" className={bottomLinkClass}>
                    <House color='black'/>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/about" className={bottomLinkClass}>
                    <Info color='black'/>
                    <span>About</span>
                </NavLink>
                <NavLink to="/portfolio" className={bottomLinkClass}>
                    <FolderCode color='black'/>
                    <span>Portfolio</span>
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar