import React from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import img from '../../assets/prueba.png'

function Login() {
    return (
        <>
            <div className="container">
                <div className="bg-blue-50 col-12 h-screen flex justify-content-center align-items-center">
                    <form onSubmit="" className='shadow-3 p-5 border-round flex justify-content-center align-items-center flex-column'>
                        <div className='flex align-items-center flex-column'>
                            <img src={img} alt="" className='border-circle' style={{width: '140px'}} />
                            <span className='col-12'>Correo Electronico:</span>
                            <InputText keyfilter="email" className='col-12' />
                            <span className='col-12 mt-2'>Contraseña:</span>
                            <Password className='col-12' toggleMask feedback={false}/>
                            <a href="/recovery" className='mt-2 no-underline'>¿Olvidaste tu contraseña?</a>
                            <Button className='mt-3' label='Iniciar sesión'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login