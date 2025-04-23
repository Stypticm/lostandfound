'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'


const LanguageToggle = () => {
  const locale = useLocale()
  const router = useRouter()
  const currentPath = usePathname()

  // Функция для изменения языка
  const handleLanguageChange = (newLocale: string) => {
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    router.refresh()
  }

  return (
    <ul className='flex gap-2'>
      <li
        onClick={() => handleLanguageChange('ru')}
        className={`cursor-pointer ${locale === 'ru' ? 'font-bold' : 'underline'}`}
      >
        Ru
      </li>
      <li
        onClick={() => handleLanguageChange('en')}
        className={`cursor-pointer ${locale === 'en' ? 'font-bold' : 'underline'}`}
      >
        En
      </li>
    </ul>
  )
}

export default LanguageToggle
