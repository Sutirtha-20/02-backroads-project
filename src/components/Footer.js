import React from 'react'
import { pageLinks, socialLinks } from '../data'


function Footer() {
  return (
    <div>
        <footer className="section footer">
        <ul className="footer-links">
        {pageLinks.map((link) => {
              return(
                <li>
                  <a rel="noreferrer" href={link.href} className="footer-link"> {link.text} </a>
                </li>
              )
            })}
        </ul>
        <ul className="footer-icons">
        {socialLinks.map((data) => {
              return ( <li key={data.id}>
                          <a rel="noreferrer" href={data.href} target="_blank" className="footer-icon"
                          ><i className={data.icon}></i
                          ></a>
                        </li>
            )})}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer