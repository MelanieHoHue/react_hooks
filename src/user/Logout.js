import React, { useContext } from 'react'

import { StateContext } from '../contexts';

export default function Logout () {

    const { state, dispatch } = useContext(StateContext)
    const { user } = state

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