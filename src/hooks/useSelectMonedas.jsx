import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  text-align: left;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
  }
  &:focus:after {
    content: '';
    position: absolute;
    width: calc(100% - 2.5rem);
  }
`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`
const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState('')
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value=''>Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  )
  return [state, SelectMonedas]
}

export default useSelectMonedas
