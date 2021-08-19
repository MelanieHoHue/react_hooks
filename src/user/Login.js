import React from 'react'

export default function Login () {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username"></input>
            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" name="login-password"></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}