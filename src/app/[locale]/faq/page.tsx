import { Metadata } from "next"
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | Бюро находок",
  description: "Ответы на популярные вопросы по использованию приложения 'Бюро находок'.",
}

const FAQ = () => {
  const t = useTranslations("FAQ")

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">{t('howToAddAdvert')}</h2>
        <p>
          {t('howToAddAdvert_answer')}
        </p>
      </div>

      <div className="mb-4">
        <section className='border-red-500 border-2 p-2'>
          <h2 className="text-lg font-bold mb-2">{t('howToRaiseAdvert')}</h2>
          <p className='text-red-500'>{t('FAQ_attention')}</p>
          <p>
            {t('howToRaiseAdvert_answer')}
          </p>
        </section>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">{t('howToRegister')}</h2>
        <p>
          {t('howToRegister_answer')}
        </p>
      </div>
    </div>
  )
}

export default FAQ