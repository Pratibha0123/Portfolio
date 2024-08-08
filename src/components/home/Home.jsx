import React from "react"
import { About } from "../pages/About"
import { Blog } from "../pages/Blog"
import { Contact } from "../pages/Contact"

import {Project} from "../pages/Project"
import { Hero } from "./Hero"


export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Project/>
      
       <Blog />
      <Contact />
    </>
  )
}
