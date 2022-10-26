import { Section, LettersContainer } from './home.styles'

import Letter from "../../components/letter/letter.component";
import Layout from '../../components/layout/layout.component';
import OImage from '../../assets/O-background.jpg'


function Home() {
  return (
    <Layout>
      <Section>
        <LettersContainer>
          <Letter 
            letter="Z" 
            imgSrc="https://www.currentschoolnews.com/wp-content/uploads/2022/06/naruto.jpg"
          />
          <Letter 
            letter="O" 
            imgSrc="https://i.ytimg.com/vi/PPNMBYcjYXE/maxresdefault.jpg"
          />
          <Letter 
            letter="R" 
            className="hide" 
            imgSrc={OImage}
          />
          <Letter letter="O" className="hide" />
        </LettersContainer>
      </Section>
    </Layout>
  )
}

export default Home