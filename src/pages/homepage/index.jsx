import {Link} from 'react-router-dom'
import HomeBanner from './home-banner';
import HomeListCTA from './home-list-cta';

export default function HomePage (){
    return (
        <main>
          <HomeBanner />
          <HomeListCTA />
        </main>
      );
}