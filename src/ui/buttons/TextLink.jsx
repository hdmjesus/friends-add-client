import Link from 'next/link'
import styled from 'styled-components'

export const TextLink = ({ className, children, href = '/', as }) => {
  return (
    <Link href={href} as={as} passHref>
      <a>
        <LinkItem className={className}>{children}</LinkItem>
      </a>
    </Link>
  )
}

const LinkItem = styled.li`
  font-size: 1rem;
  height: 45px;
  margin: 10px 7px;
  display: flex;
  align-items: center;
  color: black;

  font-size: 15px;
  :hover {
    color: #35d15f;
  }
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: 1rem;
  }
`
