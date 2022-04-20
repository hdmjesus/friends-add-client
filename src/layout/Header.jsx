import React from 'react'
import styled from 'styled-components'
import { TextLink } from '../ui/buttons/TextLink'

import { Logo } from '../ui/Logo'

export const Header = () => {
  return (
    <HeaderWrapper>
      <LeftHeader>
        <Logo />
        <Navigation>
          <TextLink href='/'>Personas</TextLink>
          <TextLink href='/'>Buscar</TextLink>
        </Navigation>
      </LeftHeader>

      <AuthButtons>
        <LoginButton>Ingresa</LoginButton>
      </AuthButtons>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 5;
  height: 80px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 2% 0 2%;
  align-items: center;
`

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`
const AuthButtons = styled.div``

const LoginButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
  width: 9em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  :before {
    content: '';
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }
  :hover::before {
    width: 9em;
  }
`
const Navigation = styled.nav`
  display: flex;
  margin: 0 20px;
`
