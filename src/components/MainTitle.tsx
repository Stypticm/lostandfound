'use client'

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const MainTitle = () => {
  const t = useTranslations();
  return (
    <Link href="/" className="text-2xl font-bold text-center" locale="en">
      {t('title')}
    </Link>
  )
}

export default MainTitle