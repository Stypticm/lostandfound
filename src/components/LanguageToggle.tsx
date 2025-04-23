'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const LanguageToggle = () => {
  const [locale, setLocale] = useState<string>("")
  const router = useRouter()
  const currentLanguage = usePathname().split('/')[1]

  useEffect(() => {
    const cookieLocale = document.cookie
      .split(';')
      .find((row) => row.startsWith('MYNEXTAPP_LOCALE='))
      ?.split('=')[1]
    if (cookieLocale) {
      setLocale(cookieLocale)
    } else {
      const browserLocale = navigator.language.slice(0, 2)
      setLocale(browserLocale)
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh()
    }
  }, [router])

  const handleLanguageChange = (locale: string) => {
    document.cookie = `MYNEXTAPP_LOCALE=${locale};`;
    router.refresh()
  }

  return (
    <ul className='flex gap-2'>
      <li
        onClick={() => handleLanguageChange('en')}
        className={`cursor-pointer ${currentLanguage === 'ru' ? 'font-bold underline' : ''}`}
      >
        Ru
      </li>
      <li
        onClick={() => handleLanguageChange('ru')}
        className={`cursor-pointer ${currentLanguage === 'en' ? 'font-bold underline' : ''}`}
      >
        En
      </li>
    </ul>
  )
}

export default LanguageToggle