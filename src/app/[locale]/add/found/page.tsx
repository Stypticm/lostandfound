import { LostFoundForm } from '@components/LostFoundForm';
import { getTranslations } from 'next-intl/server';

export default async function FoundPage() {
  const t = await getTranslations();
  return <LostFoundForm heading={t('IFound')} type="found" />;
}
