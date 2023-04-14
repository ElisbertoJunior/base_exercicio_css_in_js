import styled from 'styled-components'

export const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const SearchBtn = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  border: 1px solid ${(props) => props.theme.primaryColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.secondaryColor};
  margin-left: 8px;
  cursor: pointer;
`
export const SearchInput = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.primaryColor};
`
