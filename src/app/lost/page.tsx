import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/Table'

const Lost = () => {
  return (
    <section className="flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold text-center p-4">
        Что было потеряно
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="font-bold text-xl ">
            <TableHead>Название</TableHead>
            <TableHead>Город</TableHead>
            <TableHead>Дата</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index} className="h-15">
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

export default Lost