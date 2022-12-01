import 'bootstrap/dist/css/bootstrap.css'
import { createContext, useState } from 'react'
import Sidebar from '../components/core/Sidebar';
import '../styles/globals.css'

import app from "../components/firebase";

export const GlobalContext = createContext({ setNavbarVisibility: null });

function MyApp({ Component, pageProps }) {
  const [showNavbar, setNavbarVisibility] = useState(false);

  return (
    <GlobalContext.Provider value={{ setNavbarVisibility: setNavbarVisibility }}>
      <div className='d-flex flex-row'>
        <Sidebar showNavbar={showNavbar} />
        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  )
}

export default MyApp;