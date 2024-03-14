import { Link, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import AboutPage from './pages/about'
import HelpPage from './pages/help'
import Navbar from './components/navbar'
import HomeBanner from './pages/homepage/home-banner'
import HomeListCTA from './pages/homepage/home-list-cta'
import Order from './pages/order'
import OrderPage from './pages/order'


{/*const routers = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />,
  },
  {
    path:"/about",
    element: <AboutPage />,
  },
  {
    path:"/help",
    element:  <HelpPage></HelpPage>,
  },
]);*/}

function App() {
  return (
      <div>
        {/*<Navbar></Navbar>*/}
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
        {/*<Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/help" element={<HelpPage />}></Route>
  </Routes>*/}

        {/*<RouterProvider router={routers}></RouterProvider>*/}
      </div>
  );
}

export default App;
