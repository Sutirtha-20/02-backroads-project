import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return(
                <li>
                  <a rel="noreferrer" href={link.href} className="nav-link"> {link.text} </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((data) => {
              return ( <li key={data.id}>
                          <a rel="noreferrer" href={data.href} target="_blank" className="nav-icon"
                          ><i className={data.icon}></i
                          ></a>
                        </li>
            )})}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar