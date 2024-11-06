import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from '../global-components/NavBar'
import Login from '../access-control/components/Login'
import RecoveryPassword from '../access-control/components/RecoveryPassword'
import Register from '../access-control/components/Register'
import Catalogue from '../Catalogue-client/catalogue'

function AllRoutes() {
    const validSessionExist = localStorage.getItem('session');
    const [role, setRole] = React.useState(validSessionExist ? JSON.parse(validSessionExist).rol : null);
    const [reload, setReload] = React.useState(false);
    const navigate = useNavigate();

    const Reload = () => {
        setReload(true)
    }

    React.useEffect(() => {
    }, [reload])

    React.useEffect(() => {
        validSessionExist ? navigate('/catalogue') : navigate('/')
    }, [])

    return (
        <>
            {validSessionExist ? <NavBar session={role} /> : null}
                {validSessionExist ?
                    <Routes>
                        <Route path='/catalogue' element={<Catalogue />} />
                    </Routes> :
                    <Routes>
                        <Route path='/' element={<Login reload={Reload} />} />
                        <Route path='/recovery' element={<RecoveryPassword />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                }
        </>
    )
}
export default AllRoutes