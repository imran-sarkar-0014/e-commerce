import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [form, setForm] = useState({
        email: 'imran',
        password: ''
    })

    const [valid, setValid] = useState({
        email: 'fdd',
        password: 'fdfd'
    })


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const check_valid = () => {

        let error = false

        const validing = {
            email: '',
            password: ''
        }

        if (form.password.length < 6) {
            validing.password = 'Password Too short'
            error = true
        }

        if (!validateEmail(form.email)) {
            validing.email = 'invalid email formate'
            error = true
        }

        setValid(validing)

        return !error

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!check_valid()) {
            return
        }

        alert('logging')
    }

    const clear_error = (id) => {
        setValid({
            ...valid, [id]: ''
        })
    }

    const handleChange = (e) => {
        clear_error(e.target.id)
        setForm({
            ...form, [e.target.id]: e.target.value
        })
    }


    return (
        <div className='max-w-lg mx-auto'>
            <div className='h-32 text-center'>

                <h3 className="text-2xl pt-10 font-bold text-pink-500">Login Your Account</h3>
            </div>
            <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input onChange={handleChange} value={form.email} class={`shadow appearance-none border ${valid.email === '' ? 'border-blue-500' : 'border-red-500'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="email" type="text" placeholder="Username" />
                    <p class="text-red-500 text-xs italic">{valid.email}</p>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input onChange={handleChange} value={form.password} class={`shadow appearance-none border ${valid.password == '' ? 'border-blue-500' : 'border-red-500'} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="Enter your Password" />
                    <p class="text-red-500 text-xs italic">{valid.password}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                        Sign In
                    </button>
                    <Link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/auth/registration'>
                        Don't have an account?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login