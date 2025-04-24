import { LostFoundForm } from '@components/LostFoundForm';
import { getTranslations } from 'next-intl/server';

export default async function LostPage() {
  const t = await getTranslations();
  return <LostFoundForm heading={t('ILost')} type="lost" />;
}
