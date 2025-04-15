'use client'

import { useParams } from 'next/navigation'

const Item = () => {
    const { id } = useParams()

    return (
        <div>Item {id}</div>
    )
}

export default Item