import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | Бюро находок",
  description: "Ответы на популярные вопросы по использованию приложения 'Бюро находок'.",
}

const FAQ = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Часто задаваемые вопросы:</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Как добавить объявление?</h2>
        <p>
          На главной странице нажмите кнопку "Я нашёл" или "Я потерял" в зависимости от типа объявления. Заполните форму, добавьте фото, дождитесь пока фото отобразиться, это будет означать что фото добавилось в базу данных. Далее нажмите "Отправить".
        </p>
      </div>

      <div className="mb-4">
        <section className='border-red-500 border-2 p-2'>
          <h2 className="text-lg font-bold mb-2">Как поднять объявление вверх?</h2>
          <p className='text-red-500'>Функционал в разработке.</p>
          <p>
            Объявления можно поднимать в топ не чаще одного раза в сутки. Это позволит другим пользователям быстрее заметить его.
          </p>
        </section>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Нужно ли регистрироваться?</h2>
        <p>
          Нет, вы можете использовать приложение без регистрации через Telegram Mini App. Все данные остаются в вашем Telegram-аккаунте.
        </p>
      </div>
    </div>
  )
}

export default FAQ