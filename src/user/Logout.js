import React from 'react'

export default function Logout ({ user, setUser }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            setUser('')
        }}>
            <p>Logged in as <b>{user}</b></p>
            <input type="submit" value="Logout"></input>
            </form>
    )
}