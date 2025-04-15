'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/Table'
import { useRouter } from 'next/navigation'

const Found = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-2">
        Что было найдено
      </h2>
      <p className="text-center text-sm text-muted-foreground p-2">
        Нажмите на строку, чтобы посмотреть подробнее
      </p>
      <Table>
        <TableHeader>
          <TableRow className="font-bold text-xl">
            <TableHead>Название</TableHead>
            <TableHead>Город</TableHead>
            <TableHead>Дата</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index} className="h-15" onClick={() => router.push(`/item/${index}`)}>
                <TableCell>Название</TableCell>
                <TableCell>Город</TableCell>
                <TableCell>Дата</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </section>
  )
}

export default Found