'use client'

import { Button } from './ui/Button'
import { Info, User, CircleHelp } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const FooterButtons = () => {

    const router = useRouter()
    const pathName = usePathname()

    const handleProfile = () => {
        router.push('/profile')
    }

    const handleAbout = () => {
        router.push('/about')
    }

    const handleFaq = () => {
        router.push('/faq')
    }

    return (
        <section className=' h-20 flex gap-2 justify-around items-center'>
            <Button variant="ghost" size="icon" onClick={handleAbout} disabled={pathName === '/about'}>
                <Info className="size-7" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleFaq} disabled={pathName === '/faq'}>
                <CircleHelp className="size-7" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleProfile} disabled={pathName === '/profile'}>
                <User className="size-7" />
            </Button>
        </section>
    )
}

export default FooterButtons