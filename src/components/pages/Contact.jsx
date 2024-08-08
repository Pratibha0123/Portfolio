import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"


export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='sharmapratibha0123@gmail.com' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Message' data-aos='flip-up' />
                <button data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
            {contact.map((item) => (
                <div className='box' data-aos='zoom-in' key={item.id}>
                  <i> <a href={item.link}>{item.icon}{item.text1}</a></i>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
