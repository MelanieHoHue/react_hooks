import React from 'react'

export default function Register () {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username"></input>
            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" name="register-password"></input>
            <label htmlFor="register-password-repeat">Repeat Password:</label>
            <input type="text" name="register-password-repeat" name="register-password-repeat"></input>
            <input type="submit" value="Register"></input>
        </form>
    )
}