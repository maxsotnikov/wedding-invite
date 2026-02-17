import {Footer, Header, Home, Info, Location, OurStory} from '@/pages'
import {Route, Routes} from 'react-router';
import {ScrollToTop} from '@/features/scrollToTop/ScrollToTop.tsx';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/our-story" element={<OurStory />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
