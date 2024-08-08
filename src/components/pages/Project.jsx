import React from 'react'
import { Heading } from "../common/Heading"
import { project} from "../data/dummydata"

export const  Project=()=> {
  return (
   <>
       <section className='blog'>
        <div className='container'>
          <Heading title='Project' />
          <div className='content grid3'>
            {project.map((item) => (
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover}  alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                 
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


