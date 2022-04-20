import styled, { css } from 'styled-components'

const FilterIcon = styled.div`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
`

const FilterSpan = styled.span`
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-left: 10px;
  z-index: 1;
  padding-right: 0.3rem;
  color: ${({ theme }) => theme.colors.white};
`

const FilterChoise = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`

const FilterIconDown = styled.div`
  position: relative;
  display: inline-block;

  color: ${({ theme }) => theme.colors.white};
`

const FilterNav = styled.aside`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: -1;
  transition: 0.2s;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 5px 25px black;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  padding: 0;
  display: block;
  list-style-type: none;
  height: 0;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 20rem;
    overflow: visible;
  }

  ${({ visible }) =>
    visible &&
    css`
      max-height: calc(100vh - 80px);
      height: auto;
      z-index: 10;
      opacity: 1;
      padding-bottom: 1rem;
      overflow: auto;
    `}
`

const FilterNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

const FilterNavItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lighGray};
  padding: 0.5rem 1.2rem;
  width: 100%;
  display: flex;
  align-items: center;

  ${({ all }) =>
    !all &&
    css`
      @media ${({ theme }) => theme.devices.mobileM} {
        flex: 0 0 50%;
        max-width: 50%;
      }

      @media ${({ theme }) => theme.devices.mobileL} {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }

      @media ${({ theme }) => theme.devices.tablet} {
        flex: 0 0 50%;
        max-width: 50%;
      }
    `}
`

const FilterNavLink = styled.a`
  display: block;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`

const FilterNavText = styled.span`
  display: inline-block;
  line-height: 2.5rem;
  font-size: 1rem;
  margin-left: 0.6rem;
  max-width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 2rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
const FilterItem = styled.div`
  float: left;
  text-align: left;
  position: relative;
  padding: 0.3rem 1.6rem;
  margin-right: 0.5rem;

  @media ${({ theme }) => theme.device.laptop} {
    &:hover {
      cursor: pointer;
      aside {
        max-height: calc(100vh - 80px);
        height: auto;
        z-index: 10;
        opacity: 1;
        padding-bottom: 1rem;
        overflow: auto;
      }
    }
  }
`

export {
  FilterItem,
  FilterIcon,
  FilterSpan,
  FilterChoise,
  FilterIconDown,
  FilterNav,
  FilterNavList,
  FilterNavItem,
  FilterNavText
}
