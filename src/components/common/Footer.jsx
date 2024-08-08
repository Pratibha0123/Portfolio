import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
      {social.map((item) => (
        <i key={item.id} data-aos="zoom-in">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </i>
      ))}
        <p data-aos='zoom-in'> copy right 2024 @ All Right</p>
      </footer>
    </>
  )
}

export default Footer
