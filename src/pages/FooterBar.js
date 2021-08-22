import React from 'react'
import { useCurrentRoute } from 'react-navi'

export default function FooterBar () {
    const { url } = useCurrentRoute()
    return (
        <div>
            <hr/>
            <a href={url.href}>{url.href}</a>
        </div>
    )
}