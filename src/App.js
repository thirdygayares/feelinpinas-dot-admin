import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'


import {Login} from "./components/Login"

// city admin
import {DashboardCity} from "./components/city-admin/DashboardCity"
import {Hotel} from "./components/city-admin/Hotel"
import {PlacesCity} from "./components/city-admin/PlacesCity"
import {Restaurant} from "./components/city-admin/Restaurant"
import {SidebarCity} from "./components/city-admin/SidebarCity"
import { AddPlaces } from './components/city-admin/AddPlaces'



// dot admin
import {City} from "./components/dot-admin/City"

import {DashboardDot} from "./components/dot-admin/DashboardDot"
import {SideBarDot} from "./components/dot-admin/SidebarDot"
import {Users} from "./components/dot-admin/Users"
import {Places} from "./components/dot-admin/Places"
import { AddLocalAreas } from './components/dot-admin/AddLocalAreas'


// Not Found
import {NotFound} from "./components/NotFound"






function App() {
  return (
   
    <>

  {/* <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/book">Book</Link></li>
    </ul>
  </nav> */}

    <Routes>

      {/* login */}
      <Route path="/" element={<Login />} />
    

      <Route path="/dashboardcity" element={<SidebarCity/>}>
      <Route index element={<DashboardCity />} />
      <Route path="places" element={< PlacesCity  />} />
      <Route path="hotel" element={<Hotel />} />
      <Route path="restaurant" element={< Restaurant  />} />
      <Route path="addplaces" element={< AddPlaces  />} />

      </Route>

      <Route path="/dashboarddot" element={<SideBarDot/>}>
      <Route index element={<DashboardDot />} />
      <Route path="localarea" element={< City  />} />
      <Route path="users" element={< Users  />} />
      <Route path="places" element={< Places  />} />
      <Route path="addlocal" element={< AddLocalAreas  />} />

      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>

    </>
  )
}

export default App;
