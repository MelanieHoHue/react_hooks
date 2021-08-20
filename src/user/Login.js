import React, {useState } from 'react'

export default function Login ({ dispatch }) {
    
    const [ username, setUsername ] = useState('')

    function handleUsername (evt) {
        setUsername(evt.target.value)
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'LOGIN', username})
        }}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername}
                name="login-username" id="login-username"></input>
            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" name="login-password"></input>
            <input type="submit" value="Login" disabled={username.length === 0}></input>
        </form>
    )
}