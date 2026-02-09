import {Header} from '@/widgets/header/Header.tsx';
import {Home} from '@/pages/home/Home.tsx';
import {Footer} from '@/widgets/footer/Footer.tsx';
import {Route, Routes} from 'react-router';
import {Info} from '@/pages/info/Info.tsx';
import {Location} from '@/pages/location/Location.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/location" element={<Location />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
