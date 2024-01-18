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
          {/* <li>
            <a href="#home" className="footer-link">home</a>
          </li>
          <li>
            <a href="#about" className="footer-link">about</a>
          </li>
          <li>
            <a href="#services" className="footer-link">services</a>
          </li>
          <li>
            <a href="#featured" className="footer-link">featured</a>
          </li> */}
        </ul>
        <ul className="footer-icons">
        {socialLinks.map((data) => {
              return ( <li key={data.id}>
                          <a rel="noreferrer" href={data.href} target="_blank" className="footer-icon"
                          ><i className={data.icon}></i
                          ></a>
                        </li>
            )})}
          {/* <li>
            <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-squarespace"></i
            ></a>
          </li> */}
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