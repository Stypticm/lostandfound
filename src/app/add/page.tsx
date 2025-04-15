import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const ChooseType = () => {
    return (
        <>
            <h2 className='text-2xl font-bold text-center pb-10'>Выбери тип</h2>
            <section className='flex justify-around items-center gap-2'>
                <Button className="text-2xl p-10">
                    <Link href="/add/lost">
                        Я потерял
                    </Link>
                </Button>
                <Button className="text-2xl p-10">
                    <Link href="/add/found">
                        Я нашел
                    </Link>
                </Button>
            </section>
        </>
    )
}

export default ChooseType