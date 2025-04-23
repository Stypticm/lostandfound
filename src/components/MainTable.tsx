import { getFoundItems, getLostItems } from '@/lib/db/queries'
import ClientTable from './ClientTable'
import { Item } from '@/lib/interfaces'

const MainTable = async () => {
    const foundItems = await getFoundItems()
    const lostItems = await getLostItems()

    return (
        <ClientTable foundItems={foundItems as Item[]} lostItems={lostItems as Item[]} />
    )
}

export default MainTable