import { FormEvent, useState } from 'react'

import { SearchForm, SearchInput, SearchBtn } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <SearchForm onSubmit={aoEnviarForm}>
      <SearchInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchBtn>Pesquisar</SearchBtn>
    </SearchForm>
  )
}
export default FormVagas
