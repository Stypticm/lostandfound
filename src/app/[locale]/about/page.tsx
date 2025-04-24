import { Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const About = async () => {
  const t = await getTranslations('About');
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-2">
        <strong>{t('aboutTitle')}</strong>
        {t('aboutDescription')}
      </p>
      <p className="mb-2">{t('aboutDescription_2')}</p>
      <p className="mb-2">{t('aboutDescription_3')}</p>
      <hr className="my-6 border-muted" />

      <h2 className="text-lg font-semibold mb-2">{t('aboutDescription_4')}</h2>
      <p className="mb-2">{t('aboutDescription_5')}</p>
      <div className="flex items-center gap-3 bg-muted p-4 rounded-2xl shadow-sm border border-border max-w-md">
        <Mail className="text-primary" />
        <span className="font-mono text-sm break-all">volodinmiisha1@gmail.com</span>
      </div>
    </div>
  );
};

export default About;
