import React from 'react'
import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'

import { useQuery } from '@apollo/client'
import { ALL_PERSONS } from '../../gql/persons'

export const CardPerson = () => {
  const { loading, error, data } = useQuery(ALL_PERSONS)

  console.log(data?.allPersons)
  return (
    <PersonCard>
      <User>Jesus </User>
      <Actions>
        <BsThreeDots color='#909090' />
      </Actions>
    </PersonCard>
  )
}

const PersonCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 190px;
  height: 200px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`

const Actions = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  right: 20px;
  bottom: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 1px solid #909090;
`
const User = styled.p`
  user-select: none;
  font-size: 20px;
`
