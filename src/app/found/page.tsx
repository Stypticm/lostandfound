import TableFoundItems from '@/components/TableFoundItems'
import { getFoundItems } from '@/lib/db/queries'

const Found = async () => {
  const foundItems = await getFoundItems()

  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-2">
        Что было найдено
      </h2>
      <p className="text-center text-sm text-muted-foreground">
        Нажмите на строку, чтобы посмотреть подробнее
      </p>
      <TableFoundItems foundItems={foundItems} />
    </section>
  )
}

export default Found