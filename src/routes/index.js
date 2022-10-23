import Home from "../pages/home/home.page";
import BearMarket from "../pages/bear-market/bear-market.page";

import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons"

const routes = [
  {
    displayName: 'Home',
    path: '/',
    component: <Home />,
    type: 'link'
  },
  {
    displayName: 'Bear Market',
    path: '/bear-market',
    component: <BearMarket />,
    type: 'link'
  },
  {
    type: 'icon',
    link: '#',
    icon: faTwitter
  },
  {
    type: 'icon',
    link: '#',
    icon: faInstagram
  },
  {
    type: 'icon',
    link: '#',
    icon: faDiscord
  },
]; 

export default routes;