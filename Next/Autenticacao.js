


import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { apiNextURl } from '../api'
import { createCookie } from '../utils'

export default function Login() {
    const router = useRouter();
    const [state, setState] = useState({
        email: '',
        password: '',
        isSubmitting: false,
        message: '',
    })

    const { email, password, isSubmitting, message } = state

    const handleChange = async (e: any) => {
        const { name, value } = e.target
        await setState({ ...state, [name]: value })
    }

    const handleSubmit = async () => {
        setState({ ...state, isSubmitting: true })

        const { email, password } = state
        try {
            const res = await fetch(`${apiNextURl}/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())

            const { token, success, msg, user } = res

            if (!success) {
                return setState({
                    ...state,
                    message: msg,
                    isSubmitting: false,
                })
            }
            // expire in 30 minutes(same time as the cookie is invalidated on the backend)
            (window as any).token = token
            createCookie('token', token, 0.5)

            router.push({ pathname: '/session' })
        } catch (e: any) {
            setState({ ...state, message: e.toString(), isSubmitting: false })
        }
    }

    return (
        <div className="wrapper">
            <h1>Login</h1>
            <input
                className="input"
                type="text"
                placeholder="email"
                value={email}
                name="email"
                onChange={e => {
                    handleChange(e)
                }}
            />

            <input
                className="input"
                type="password"
                placeholder="password"
                value={password}
                name="password"
                onChange={e => {
                    handleChange(e)
                }}
            />

            <button disabled={isSubmitting} onClick={() => handleSubmit()}>
                {isSubmitting ? '.....' : 'login'}
            </button>
            <div className="message">{message}</div>
        </div>
    )
}

//--------------------------------------------------------------------------------------------------------------------
//utils.ts
// create a named cookie
/**
 * @param {sring} cookieName
 * @param {string} cookieValue //token
 * @param {string} hourToExpire
 */
export const createCookie = (cookieName: string, cookieValue: string, hourToExpire: number) => {
  const date = new Date()
  date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000)
  document.cookie = `${cookieName} = ${cookieValue}; expires = ${date.toUTCString()}`
}

export const deleteCookie = (name:string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
//----------------------------------------------------------------------------------------------------------------------

//api.ts

export const apiNextURl = "http://localhost:3001/api"
export const apiURl = "http://api:8081"

//---------------------------------------------------------------------------------------------------------------------
// delete Cookie
import { deleteCookie } from '../utils'

const handleLogout = () => {
    deleteCookie('token')
    router.push('/login')
}


//--------------------------------------------------------------------------------------------------------------------


