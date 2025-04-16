import { Metadata } from "next"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "О проекте | Бюро находок",
  description: "Узнайте больше о приложении 'Бюро находок', его целях и команде.",
}

const About = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">О проекте</h1>
      <p className="mb-2">
        <strong>Бюро находок</strong> — это удобное приложение для поиска и размещения потерянных или найденных вещей.
      </p>
      <p className="mb-2">
        Мы стремимся создать сообщество, где каждый может быстро вернуть утерянную вещь своему владельцу или сообщить о находке.
      </p>
      <p className="mb-2">
        Проект разработан с нуля как pet-проект и находится в активной разработке. Мы постоянно улучшаем интерфейс и добавляем новые функции.
      </p>
      <hr className="my-6 border-muted" />

      <h2 className="text-lg font-semibold mb-2">Хочешь себе такое же приложение?</h2>
      <p className="mb-2">
        Я открыт к предложениям! Если вам нужно подобное приложение под ваш проект или бизнес — пишите на почту:
      </p>
      <div className="flex items-center gap-3 bg-muted p-4 rounded-2xl shadow-sm border border-border max-w-md">
        <Mail className="text-primary" />
        <span className="font-mono text-sm break-all">volodinmiisha1@gmail.com</span>
      </div>
    </div>
  )
}

export default About