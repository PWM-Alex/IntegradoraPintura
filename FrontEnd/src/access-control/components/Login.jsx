import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import img from '../../assets/prueba.png'

function Login() {
    const [validForm, setValidForm] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }
    }, [email, password])
    return (
        <>
            <div className="container">
                <div className="col-12 h-screen flex justify-content-center align-items-center">
                    <form onSubmit="" className='shadow-3 p-5 border-round flex justify-content-center align-items-center flex-column'>
                        <div className='flex align-items-center flex-column'>
                            <img src={img} alt="" className='border-circle' style={{width: '140px'}} />
                            <span className='col-12'>Correo Electronico:</span>
                            <InputText keyfilter="email" className='col-12' onChange={(e) => setEmail(e.target.value)} />
                            <span className='col-12 mt-2'>Contraseña:</span>
                            <Password className='col-12' onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false}/>
                            <a href="/recovery" className='mt-2 no-underline'>¿Olvidaste tu contraseña?</a>
                            <Button className='mt-3' label='Iniciar sesión' disabled={validForm}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login