import { Button } from '@/components/ui/Button'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

const ChooseType = async () => {
    const t = await getTranslations()
    return (
        <>
            <h2 className='text-2xl font-bold text-center pb-10'>{t('chooseType')}</h2>
            <section className='flex justify-around items-center gap-2'>
                <Button className="text-2xl p-10">
                    <Link href="/add/lost">
                        {t('ILost')}
                    </Link>
                </Button>
                <Button className="text-2xl p-10">
                    <Link href="/add/found">
                        {t('IFound')}
                    </Link>
                </Button>
            </section>
        </>
    )
}

export default ChooseType