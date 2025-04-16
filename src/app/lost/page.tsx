import TableLostItems from '@/components/TableLostItems'
import { getLostItems } from '@/lib/db/queries'

const Lost = async () => {
  const lostItems = await getLostItems()

  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-2">
        Что было найдено
      </h2>
      <p className="text-center text-sm text-muted-foreground">
        Нажмите на строку, чтобы посмотреть подробнее
      </p>
      <TableLostItems lostItems={lostItems} />
    </section>
  )
}

export default Lost