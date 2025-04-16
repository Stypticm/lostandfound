import { Item } from '@/lib/interfaces'
import TableFoundItems from './TableFoundItems'
import { getFoundItems, getLostItems } from '@/lib/db/queries'
import Link from 'next/link'
import TableLostItems from './TableLostItems'

export const dynamic = 'force-dynamic'

const MainTable = async () => {
    const foundItems = await getFoundItems()
    const lostItems = await getLostItems()

    return (
        <section className="flex flex-col gap-2 pt-2">
            <section className="flex flex-col">
                <h2 className="text-2xl font-bold text-center">
                    Недавно найдено — <br /><Link href="/found" className="underline text-primary">смотреть всё</Link>
                </h2>
                <TableFoundItems foundItems={foundItems} count={3} />
                <p className="text-center text-sm text-muted-foreground">
                    Нажмите на строку, чтобы посмотреть подробнее
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-center">
                    Недавно потеряно — <br /><Link href="/lost" className="underline text-primary">смотреть всё</Link>
                </h2>
                <TableLostItems lostItems={lostItems} count={3} />
                <p className="text-center text-sm text-muted-foreground">
                    Нажмите на строку, чтобы посмотреть подробнее
                </p>
            </section>
        </section>
    )
}

export default MainTable