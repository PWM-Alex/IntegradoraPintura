import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../access-control/components/Login'
import RecoveryPassword from '../access-control/components/RecoveryPassword'
import Register from '../access-control/components/Register'
import Catalogue from '../Catalogue-client/catalogue'
import Homepage from '../Catalogue-client/homepage'

function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recovery' element={<RecoveryPassword />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Homepage/>}/>
                <Route path='/catalogue' element={<Catalogue/>} />
            </Routes>
        </Router>
    )
}

export default AllRoutes