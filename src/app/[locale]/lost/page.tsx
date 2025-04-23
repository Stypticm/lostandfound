import TableLostItems from '@/components/TableLostItems'
import { getLostItems } from '@/lib/db/queries'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const Lost = async () => {
  const lostItems = await getLostItems()
  const t = await getTranslations()

  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-2">
        {t('whatWasLost')}
      </h2>
      <p className="text-center text-sm text-muted-foreground">
        {t('descForTable')}
      </p>
      <TableLostItems lostItems={lostItems} />
    </section>
  )
}

export default Lost