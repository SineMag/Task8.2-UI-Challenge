import React from 'react'

import styled from 'styled-components'

import patternRight from '../assets/bg-pattern-intro-right-desktop.svg'

import patetrnLeft from '../assets/bg-pattern-intro-left-desktop.svg'

import heroImg from '../assets/image-intro-desktop.jpg'

import mobileImg from '../assets/image-intro-mobile.jpg'


export const Hero = () => {

  return (

    <HeroSection id='hero'>

      <div className='container'>

        <div className='hero-line'></div>

        <h1>Humanizing your insurance.</h1>

        <p>

          Get your life insurance coverage easier and faster. We blend our

          expertise and technology to help you find the plan that's right for

          you. Ensure you and your loved ones are protected.

        </p>

        <button>View Plans</button>

      </div>

      <img className='avatar' src={heroImg} alt='Image intro' />

      <img className='image-intro' src={patternRight} alt='Pattern right' />

      <img className='image-outro' src={patetrnLeft} alt='Pattern left' />

    </HeroSection>

  )

}


const HeroSection = styled.div`

  display: flex;

  padding: 3.5rem 0;

  justify-content: space-between;

  align-items: center;

  background-color: hsl(256, 26%, 20%);

  position: relative;

  .container {

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: flex-start;

    gap: 1.3rem;

    padding: 0 9rem;


    .hero-line {

      padding: 1px 3.5rem;

      background-color: hsl(273, 4%, 51%);

    }


    h1 {

      font-family: 'DM Serif Display', serif;

      font-size: 3rem;

      padding-right: 40vw;

      color: hsl(0, 0%, 98%);

      /* letter-spacing: -3.3px; */

      word-spacing: none;

      font-weight: 400;

      line-height: 2.8rem;

      padding-top: 1rem;

    }


    p {

      padding-top: 0.5rem;

      color: #fff;

      opacity: 0.7;

      line-height: 1.2rem;

      font-size: 1rem;

      padding-right: 35vw;

      font-family: 'Karla', sans-serif;

    }


    button {

      padding: 0.4rem 0.6rem;

      background: transparent;

      border: 2px solid hsl(273, 4%, 51%);

      color: hsl(273, 4%, 51%);

      text-transform: uppercase;

      opacity: 1;

      transition: 0.3s ease-in-out;

      cursor: pointer;

      border-radius: 3px;

      &:hover {

        color: hsl(256, 26%, 20%);

        background-color: white;

        border: none;

        padding: 0.5rem 0.7rem;

        font-weight: 600;

      }

    }

  }


  .avatar {

    position: absolute;

    left: 63%;

    top: 3rem;

    height: 27rem;

  }


  .image-intro {

    position: absolute;

    top: -2%;

    left: 79.7%;

    height: 23rem;

    z-index: 3;

  }


  .image-outro {

    height: 22rem;

    position: absolute;

    right: 90%;

    top: 80%;

  }


  @media screen and (min-width: 280px) and (max-width: 980px) {

    /* overflow: hidden; */

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    position: relative;

    padding: 50%;

    position: relative;

    margin-bottom: 30rem;

    .container {

      .hero-line {

        display: none;

      }

      margin-top: 7rem;

      height: 30vh;

      background-color: hsl(256, 26%, 20%);

      position: absolute;

      top: 77%;

      padding: 16rem 0;

      h1 {

        padding: 0 2rem;

        text-align: center;

        line-height: 1.2;

        position: absolute;

        top: 16%;

      }

      p {

        margin-top: 2rem;

        padding: 0 3rem;

        text-align: center;

        padding-right: 15vw;

      }


      button {

        position: absolute;

        top: 75%;

        left: 25%;

        font-size: 1.2rem;

        padding: 1rem 3.5rem;

        color: hsl(0, 0%, 98%);

        border: 2px solid hsl(0, 0%, 98%);

      }

    }

    .avatar {

      position: absolute;

      left: -1%;

      top: -1%;

      height: 105%;

      width: 102%;

      object-fit: cover;

    }


    .image-intro {

      display: none;

      /* position: absolute;

      top: 170%;

      left: 59.7%;

      height: 20rem;

      z-index: 3;

      overflow-x: hidden; */

    }


    .image-outro {

      display: none;

      /* height: 22rem;

      position: absolute;

      right: 87%;

      top: 80%;

      rotate: 45deg; */

    }

  }


  @media screen and (min-width: 768px) and (max-width: 834px) {

    .container {

      display: flex;

      justify-content: center;

      align-items: center;

      h1 {

        text-align: center;

        font-size: 5rem;

        margin-top: -3rem;

        /* margin-left: 3rem; */

      }

      p {

        font-size: 2rem;

        /* line-height: ; */

      }

    }

    .avatar {

      position: absolute;

      left: -2%;

      top: 0%;

      height: 80%;

      width: 102%;

      object-fit: cover;

    }

  }

`