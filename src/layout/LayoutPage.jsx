import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'

export const LayoutPage = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`
const Content = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(90vh - 190px);
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 0 2% 0 2%;
  @media ${({ theme }) => theme.devices.tablet} {
    margin-top: 80px;
  }
`
