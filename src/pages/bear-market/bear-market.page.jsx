import NftCard from '../../components/nft-card/nft-card.component';
import { 
  Content, 
  Cover, 
  Grid,
  TitleContainer,
  SmallTitle,
  LargeTitle,
} from './bear-market.styles'
import Confetti from '../../components/confetti/confetti.component'
import Layout from '../../components/layout/layout.component';

function BearMarket() {
  return (
    <Layout>
      <Confetti />
      <Cover>
        <TitleContainer>
          <SmallTitle>The Bear Market</SmallTitle>
          <LargeTitle>welcome&nbsp; home</LargeTitle>
        </TitleContainer>
      </Cover>

      <section>
        <Content>
          <Grid>
            <NftCard 
              isSingle 
              imgSrc="https://assets-global.website-files.com/622eead55797fc2865c24818/62fcee32a353c58760d93b70_OBM-home.webp"
            />
            </Grid>
          <Grid>
            <NftCard imgSrc="https://assets-global.website-files.com/622eead55797fc2865c24818/62fdfd444422723fbb9daca2_founder%20coins.webp" />
            <NftCard imgSrc="https://assets-global.website-files.com/622eead55797fc2865c24818/62fdfa240b641e664decf242_Lonzo_Ball_Bear-p-1600.webp" />
          </Grid>
        </Content>
      </section>
    </Layout>
  )
}

export default BearMarket;