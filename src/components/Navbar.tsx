import React, { useState } from 'react'

import styled from 'styled-components'

import logo from '../assets/logo.svg'

import { GiHamburgerMenu } from 'react-icons/gi'

import { VscChromeClose } from 'react-icons/vsc'


export const Navbar = () => {

  const [navbarState, setNavbarState] = useState(false)

  return (

    <>

      <Nav id='nav'>

        <div className='brand'>

          <div className='container'>

            <img src={logo} alt='Insure Logo' />

          </div>

          <div className='toggle'>

            {navbarState ? (

              <VscChromeClose onClick={() => setNavbarState(false)} />

            ) : (

              <GiHamburgerMenu onClick={() => setNavbarState(true)} />

            )}

          </div>

        </div>


        <ul>

          <li>

            <a href='#about'>How we work</a>

          </li>

          <li>

            <a href='#'>Blog</a>

          </li>

          <li>

            <a href='#footer'>Account</a>

          </li>

          <li>

            <a href='#main'>View Plans</a>

          </li>

        </ul>

      </Nav>


      <ResponsiveNav state={navbarState}>

        <ul>

          <li>

            <a href='#about' onClick={() => setNavbarState(false)}>

              How we work

            </a>

          </li>

          <li>

            <a href='#' onClick={() => setNavbarState(false)}>

              Blog

            </a>

          </li>


          <li>

            <a href='#footer' onClick={() => setNavbarState(false)}>

              Account

            </a>

          </li>

          <li>

            <a href='#main' onClick={() => setNavbarState(false)}>

              View Plans

            </a>

          </li>

        </ul>

      </ResponsiveNav>

    </>

  )

}


// mobile viewport navigation

const ResponsiveNav = styled.div`

  display: flex;

  background-color: hsl(0, 0%, 98%);

  width: 100%;

  z-index: 5;

  position: absolute;

  height: 30vh;

  transition: 0.3s ease-in-out;

  top: ${({ state }) => (state ? '50px' : '-400px')};

  font-family: 'Karla', sans-serif;

  ul {

    list-style-type: none;

    width: 100%;

    li {

      width: 100%;

      margin: 1.6rem 0;

      /* margin-left: 2rem; */

      text-align: center;

      &:first-of-type {

        opacity: 0.7;

      }

      a {

        font-size: 1.5rem;

        transition: 0.3s ease-in-out;

        text-decoration: none;

        color: hsl(256, 26%, 20%);

        text-transform: uppercase;


        &:hover {

          color: hsl(270, 9%, 17%);

          text-decoration: underline;

        }

      }

    }

  }

`


// main viewport navigation

const Nav = styled.nav`

  display: flex;

  justify-content: space-between;

  align-items: center;

  /* padding: 0.6rem 1rem; */

  background-color: hsl(0, 0%, 98%);

  padding: 1.1rem 9rem;

  /* cursor: pointer; */

  .brand {

    .container {

      display: flex;

      justify-content: center;

      align-items: center;

      gap: 1;

      font-weight: 900;

      text-transform: uppercase;

      img {

        height: 1rem;

        color: hsl(273, 4%, 51%);

      }

    }

    .toggle {

      display: none;

    }

  }


  ul {

    display: flex;

    list-style-type: none;

    gap: 1.2rem;

    text-transform: uppercase;

    font-family: 'Karla', sans-serif;

    cursor: pointer;

    li {

      a {

        text-decoration: none;

        font-size: 0.8rem;

        transition: 0.4s ease-in-out;

        color: hsl(273, 4%, 51%);

        font-weight: 400;

        word-spacing: 4px;

        transition: 0.3s ease-in-out;

        &:hover {

          background-color: hsl(256, 26%, 20%);

          color: white;

          padding: 0.3rem;

          border-radius: 3px;

          border: none;

          &:active {

            outline: none;

          }

        }

      }

      &:last-of-type {

        a {

          border: 2px solid grey;

          color: hsl(256, 26%, 20%);

          padding: 0.4rem;

          word-spacing: 2px;

          font-weight: 700;

          border-radius: 3px;


          &:hover {

            color: white;

            border: none;

          }

        }

      }

    }

  }


  @media screen and (min-width: 280px) and (max-width: 1080px) {

    padding: 1.1rem 2.5rem;

    .brand {

      display: flex;

      justify-content: space-between;

      align-items: center;

      width: 100%;

      .toggle {

        display: block;

      }

    }

    ul {

      display: none;

    }

  }

`