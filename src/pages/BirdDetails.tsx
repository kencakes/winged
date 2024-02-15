import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BirdDetails() {
    // Gets the birds ID
    const { id } = useParams();

    return (
        <div>BirdDetails</div>
    )
}
