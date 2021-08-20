import React from 'react'

export default function Logout ({ user, dispatch }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'LOGIN' })
        }}>
            <p>Logged in as <b>{user}</b></p>
            <input type="submit" value="Logout"></input>
            </form>
    )
}