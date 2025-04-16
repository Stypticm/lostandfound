'use client'

import { Item } from '@/lib/interfaces'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type DisplayItem = Pick<Item, 'id' | 'title' | 'city' | 'createdAt'>

const TableLostItems = ({ lostItems, count }: { lostItems: DisplayItem[] | undefined, count?: number }) => {    const [formattedItems, setFormattedItems] = useState<DisplayItem[] | undefined>([])
    const router = useRouter()

    useEffect(() => {
        if (lostItems) {
            setFormattedItems(lostItems)
        }
    }, [lostItems])

    const handleRowClick = (id: number) => {
        router.push(`/item/${id}`)
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className="font-bold text-xl">
                    <TableHead>Название</TableHead>
                    <TableHead>Город</TableHead>
                    <TableHead>Дата</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {formattedItems && formattedItems.length > 0 ? (
                    count ? formattedItems.slice(0, count).map((item: DisplayItem) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id as number)}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.city}</TableCell>
                            <TableCell>{item.createdAt}</TableCell>
                        </TableRow>
                    )) : formattedItems.map((item: DisplayItem) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id as number)}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.city}</TableCell>
                            <TableCell>{item.createdAt}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">Ничего не найдено</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default TableLostItems