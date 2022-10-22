import { LettersContainer } from './home.styles'

import Letter from "../../components/letter/letter.component";


function Home() {
  return (
    <div>
      <LettersContainer>
        <Letter letter="Z" />
        <Letter letter="O" />
        <Letter letter="R" />
        <Letter letter="O" />
      </LettersContainer>
    </div>
  )
}

export default Home