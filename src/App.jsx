import React, { useEffect } from 'react'

import '../src/App.css'

import scrollreveal from 'scrollreveal'

import { Navbar } from './components/Navbar'

import { Hero } from './components/Hero'

import { Main } from './components/Main'

import { Footer } from './components/Footer'


export default function App() {

  useEffect(() => {

    const scroll = scrollreveal({

      origin: 'top',

      distance: '80px',

      duration: 2000,

      reset: true,

    })


    scroll.reveal(

      `

      #nav,

      #hero,

      #main,

      #footer

      `,

      {

        opacity: 0,

        interval: 300,

      }

    )

  }, [])


  return (

    <>

      <Navbar />

      <Hero />

      <Main />
<p>bcvbc</p>
      <Footer />

    </>

  )

}