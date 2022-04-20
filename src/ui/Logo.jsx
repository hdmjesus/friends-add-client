import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <FigurelLogo>
      <Image
        src='/assets/friends-logo.svg'
        alt='logo'
        width={100}
        height={100}
      ></Image>
    </FigurelLogo>
  )
}

const FigurelLogo = styled.figure`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`
