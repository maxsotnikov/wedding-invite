import {Footer, Header, Home, Info, Location, OurStory} from '@/pages'
import {Route, Routes} from 'react-router';
import {ScrollToTop} from '@/features/scrollToTop/ScrollToTop.tsx';
import {ROUTES} from '@/shared/config/routes.ts';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />}/>
        <Route path={ROUTES.info} element={<Info />}/>
        <Route path={ROUTES.location} element={<Location />}/>
        <Route path={ROUTES.ourStory} element={<OurStory />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
