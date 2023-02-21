import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppUser from './component/user/AppUser'
import AppAdmin from './component/admin/AppAdmin'
const App = () => {
  return (
    <Routes>
      <Route path='/admin/*' element={<AppAdmin></AppAdmin>}></Route>
      <Route path='user/*' element={<AppUser></AppUser>}></Route>

    </Routes>
  )
}

export default App