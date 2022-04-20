import React from 'react'
import styled from 'styled-components'
import { MdAddCircleOutline } from 'react-icons/md'

export const AddElement = () => {
  return (
    <WrapperAdd>
      <MdAddCircleOutline />
      <AddDescription>Agregar</AddDescription>
    </WrapperAdd>
  )
}

const WrapperAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  cursor: pointer;
  color: #909090;
  :hover {
    color: black;
  }
`

const AddDescription = styled.span`
  font-size: 20px;
`
