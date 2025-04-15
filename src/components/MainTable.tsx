'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const MainTable = () => {
    return (
        <section className="flex flex-col gap-2 pt-2">
            <section className="flex flex-col">
                <h2 className="text-2xl font-bold text-center">
                    Недавно найдено — <br /><Link href="/found" className="underline text-primary">смотреть всё</Link>
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
                            Array.from({ length: 3 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>Название</TableCell>
                                    <TableCell>Город</TableCell>
                                    <TableCell>Дата</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <p className="text-center text-sm text-muted-foreground">
                    Нажмите на строку, чтобы посмотреть подробнее
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-center">
                    Недавно потеряно — <br /><Link href="/lost" className="underline text-primary">смотреть всё</Link>
                </h2>
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
                            Array.from({ length: 3 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>Название</TableCell>
                                    <TableCell>Город</TableCell>
                                    <TableCell>Дата</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <p className="text-center text-sm text-muted-foreground">
                    Нажмите на строку, чтобы посмотреть подробнее
                </p>
            </section>
        </section>
    )
}

export default MainTable