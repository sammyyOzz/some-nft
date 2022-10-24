import NftCard from '../../components/nft-card/nft-card.component';
import { Content, Cover, Grid } from './bear-market.styles'

function BearMarket() {
  return (
    <>
      <Cover>
        
      </Cover>

      <section>
        <Content>
          <Grid><NftCard isSingle /></Grid>
          <Grid>
            <NftCard />
            <NftCard />
          </Grid>
        </Content>
      </section>

      
    </>
  )
}

export default BearMarket;