import React from 'react'

export default function Logout ({ user }) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <p>Logged in as <b>{user}</b></p>
            <input type="submit" value="Logout"></input>
            </form>
    )
}