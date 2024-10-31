import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../access-control/components/Login'
import RecoveryPassword from '../access-control/components/RecoveryPassword'

function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/recovery' element={<RecoveryPassword />} />
                <Route path='/register' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes