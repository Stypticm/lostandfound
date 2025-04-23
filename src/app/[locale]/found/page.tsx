import TableFoundItems from '@/components/TableFoundItems'
import { getFoundItems } from '@/lib/db/queries'
import { getTranslations } from 'next-intl/server'

const Found = async () => {
  const foundItems = await getFoundItems()
  const t = await getTranslations()

  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-2">
        {t('whatWasFound')}
      </h2>
      <p className="text-center text-sm text-muted-foreground">
        {t('descForTable')}
      </p>
      <TableFoundItems foundItems={foundItems} />
    </section>
  )
}

export default Found